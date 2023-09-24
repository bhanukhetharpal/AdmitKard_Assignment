import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AnalysisResults from "./AnalysisResults";

export function FileUpload() {
  const [file, setFile] = useState(null);
  const [alert, showAlert] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileSizeInBytes = selectedFile.size;
      const maxSizeInBytes = 5 * 1024 * 1024; //5MB in bytes
      if (fileSizeInBytes > maxSizeInBytes) {
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
        try{
            //sending POST request to server's upload endpoint
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if(response.ok) {
                setShowResults(true);
            }
            else {
                console.error("Server error:" , response.statusText);
            }
        }
        catch (error) {
            console.error("Error: ", error);
        }
    }
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Choose File"
          aria-label="Choose File"
          aria-describedby="File Upload"
          type="file"
          accept=".txt"
          onChange={handleFileChange}
        />
      </InputGroup>
      <Button variant="primary" onClick={handleUpload}>
        Upload
      </Button>
      {alert && (
        <Alert variant="primary" onClose={() => showAlert(false)} dismissible>
          File size exceeds the limit of 5MB. Please select a smaller file, or
          compress it before uploading.
        </Alert>
      )}
      {showResults && <AnalysisResults />}
    </div>
  );
}
