import "./App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FileUpload } from "./components/FileUpload";
import { useState, useEffect } from "react";
import WordFrequency from "./components/WordFrequency";

function App() {
  const [key, setKey] = useState("fileUpload");
  const [isAnalysisDone, setIsAnalysisDone] = useState(false);
  const [wordFrequencies, setWordFrequencies] = useState([]);

  const handleAnalysisDone = (wordFrequencies) => {
    setIsAnalysisDone(true);
    setWordFrequencies(wordFrequencies); // Set the wordFrequencies state
  };
  // useEffect to watch for changes in isAnalysisDone and enable the tab
  useEffect(() => {
    if (isAnalysisDone) {
      setKey("freq"); // Activate the "Word Frequency" tab
    }
  }, [isAnalysisDone]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="fileUpload" title="Home">
        <FileUpload onAnalysisDone={handleAnalysisDone} />
      </Tab>
      <Tab eventKey="freq" title="Word Frequency" disabled={!isAnalysisDone}>
        {isAnalysisDone && <WordFrequency wordFrequencies={wordFrequencies} />}
      </Tab>
      <Tab eventKey="chart" title="Frequency Graph" disabled={!isAnalysisDone}>
        Graph for frequency of each word
      </Tab>
    </Tabs>
  );
}

export default App;
