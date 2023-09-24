import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function AnalysisResults({ analysisData }) {
  if (!analysisData) {
    return null;
  }
  const { top5Pairs = [], top5Words = [] } = analysisData;

  return (
    <div>
      <h1>Text Analysis Results</h1>
      {/* Display top words */}
      <div>
        <h2>Top 5 Mostly Occurring Words</h2>
        {top5Words.length === 0 ? (
          <p>No top words found</p>
        ) : (
          <div className="cards">
            {top5Words.map((word) => (
              <Card
                bg="info"
                key="info"
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

      {/* Display top 5 co-occuring words */}
      <div>
        <h2>Top 5 Mostly Occurring Pairs</h2>
        {top5Pairs.length === 0 ? (
          <p>No top words found</p>
        ) : (
          <div className="cards">
            {top5Pairs.map((word) => (
              <Card
                bg="info"
                key="info"
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
