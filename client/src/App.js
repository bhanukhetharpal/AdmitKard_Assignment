import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FileUpload } from './components/FileUpload';
import { useState } from 'react';

function App() {
    const [key, setKey] = useState('fileUpload');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="fileUpload" title="Home">
        <FileUpload />
      </Tab>
      <Tab eventKey="freq" title="Word Frequency">
        Frequency of each word will be displayed here
      </Tab>
      <Tab eventKey="chart" title="Frequency Graph">
        Graph for frequency of each word
      </Tab>
    </Tabs>
  );
}

export default App;
