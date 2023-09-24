import React from "react";

function AnalysisResults({ analysisData }) {
  if (!analysisData) {
    return null;
  }
  const { top5words, top5Pairs = [], wordFrequencies = [] } = analysisData;
  console.log("Top 5 Words:", top5words);
  console.log("Top 5 Pairs:", top5Pairs);
  console.log("Word Frequencies:", wordFrequencies);

  return <div>{<h1>Analysing....</h1>}</div>;
}

export default AnalysisResults;
