import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AnalysisResults from "./AnalysisResults";
import "../styles/fileupload.css";

export function FileUpload({ onAnalysisDone }) {
  const [file, setFile] = useState(null);
  const [alert, showAlert] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [analysisData, setAnalysisData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileSizeInBytes = selectedFile.size;
      const maxSizeInBytes = 5 * 1024 * 1024; //5MB in bytes
      if (fileSizeInBytes > maxSizeInBytes) {
        setAlertText(
          "File size exceeds the limit of 5MB. Please select a smaller file, or compress it before uploading"
        );
        showAlert(true);
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    //file sent to backend from here after it is verified that the size is less than 5 MB
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        //sending POST request to server's upload endpoint
        const response = await fetch("http://localhost:5000/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            console.error(data.error);
          } else {
            setAnalysisData(data);
            setShowResults(true);
            onAnalysisDone(data.wordFrequencies);
          }
        } else {
          setAlertText("Kindly Upload a File to Analyse");
          showAlert(true);
          console.error("Server error:", response.statusText);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };
  return (
    <div>
      {!showResults && (
        <div className="file-upload-container">
          <InputGroup className="mb-3">
            <Form.Control
              className="file-input"
              placeholder="Choose File"
              aria-label="Choose File"
              aria-describedby="File Upload"
              type="file"
              accept=".txt"
              onChange={handleFileChange}
            />
          </InputGroup>
          <Button
            className="upload-button"
            variant="primary"
            onClick={handleUpload}
          >
            Upload
          </Button>
        </div>
      )}
      {alert && (
        <Alert
          className="alert-message"
          variant="primary"
          onClose={() => showAlert(false)}
          dismissible
        >
          {alertText}
        </Alert>
      )}
      {showResults && <AnalysisResults analysisData={analysisData} />}
    </div>
  );
}
