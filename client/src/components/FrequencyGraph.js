import React from "react";
import { Bar } from "react-chartjs-2";

const FrequencyGraph = ({wordFrequencies}) => {
  const words = Object.keys(wordFrequencies);
  const frequencies = Object.values(wordFrequencies);

  const data = {
    labels: words,
    datasets: [
      {
        label: "Word Frequency",
        backgroundColor: " #007bff",
        borderColor: " #007bff",
        data: frequencies,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data}  options={options}/>
    </div>
  );
};

export default FrequencyGraph;