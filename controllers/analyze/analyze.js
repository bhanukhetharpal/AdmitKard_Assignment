import fs from "fs";
import util from "util";

function performAnalysis(text) {
  const wordRegex = /[a-zA-Z]+/g;

  //tokenizing the text and counting word frquencies
  const wordCounts = {};
  const tokens = text.match(wordRegex);

  if (tokens) {
    for (const token of tokens) {
      const word = token.toLowerCase();
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  }
  if (Object.keys(wordCounts).length === 0) {
    return {
      error:
        "No words were found in the uploaded text. Please upload a text document with words.",
    };
  }
  //Finding the 5 mostly occuring words
  const top5Words = Object.keys(wordCounts)
    .sort((a, b) => wordCounts[b] - wordCounts[a])
    .slice(0, 5);

  //Finding top 5 mostly co-occuring words
  const wordPairs = {};
  if (tokens) {
    for (let i = 0; i < tokens.length - 1; i++) {
      const pair = `${tokens[i].toLowerCase()} ${tokens[i + 1].toLowerCase()}`;
      if (wordPairs[pair]) {
        wordPairs[pair]++;
      } else {
        wordPairs[pair] = 1;
      }
    }
  }

  const top5Pairs = Object.keys(wordPairs)
    .sort((a, b) => wordPairs[b] - wordPairs[a])
    .slice(0, 5);

  return {
    wordFrequencies: wordCounts,
    top5Words,
    top5Pairs,
  };
}

const readFileAsync = util.promisify(fs.readFile);

async function analyzeText(filePath) {
  try {
    const data = await readFileAsync(filePath, "utf-8");
    if (data.trim() === "") {
      return {
        error: "The uploaded file is empty. Please select a file with content.",
      };
    }
    const analysisResults = performAnalysis(data);
    return analysisResults;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default analyzeText;
