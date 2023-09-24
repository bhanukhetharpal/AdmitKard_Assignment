import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function AnalysisResults({ analysisData }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  
  if (!analysisData) {
    return null;
  }
  const { top5Pairs = [], top5Words = [] } = analysisData;

  // Filter top words and pairs based on the searchKeyword
  const filteredTopWords = top5Words.filter((word) =>
    word.includes(searchKeyword)
  );
  const filteredTopPairs = top5Pairs.filter((pair) =>
    pair.includes(searchKeyword)
  );

  return (
    <div>
      <h1>Text Analysis Results</h1>
      
      {/* Keyword search input */}
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search for a keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </InputGroup>

      {/* Display top words */}
      <div>
        <h2>Top 5 Mostly Occurring Words</h2>
        {filteredTopWords.length === 0 ? (
          <p>No matching top words found</p>
        ) : (
          <div className="cards">
            {filteredTopWords.map((word, index) => (
              <Card
                bg="info"
                key={index}
                className="mb-2"
                style={{ width: "18rem" }}
                body
              >
                <blockquote className="blockquote mb-0">{word}</blockquote>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Display top 5 co-occurring words */}
      <div>
        <h2>Top 5 Mostly Occurring Pairs</h2>
        {filteredTopPairs.length === 0 ? (
          <p>No matching top pairs found</p>
        ) : (
          <div className="cards">
            {filteredTopPairs.map((word, index) => (
              <Card
                bg="info"
                key={index}
                className="mb-2"
                style={{ width: "18rem" }}
                body
              >
                <blockquote className="blockquote mb-0">
                  {word}
                </blockquote>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalysisResults;
