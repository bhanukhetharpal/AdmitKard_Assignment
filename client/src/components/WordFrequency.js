import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";

function WordFrequency({ wordFrequencies }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  // Filter word frequencies based on the searchKeyword
  const filteredWordFrequencies = wordFrequencies
    ? Object.entries(wordFrequencies).filter(([word]) =>
        word.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : [];

  return (
    <div>
      <h2>Word Frequencies</h2>

      {/* Keyword search input */}
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Search for a keyword"
          aria-describedby="basic-addon1"
          type="text"
          placeholder="Search for a keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </InputGroup>

      {/* Display word frequencies */}
      {filteredWordFrequencies.length === 0 ? (
        <p>No matching word frequencies found</p>
      ) : (
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {filteredWordFrequencies.map(([word, frequency]) => (
              <tr key={word}>
                <td>{word}</td>
                <td>{frequency}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default WordFrequency;
