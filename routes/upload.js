import express from "express";
import multer from "multer";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

function analyzeText(text) {
    const wordRegex = /[a-zA-Z]+/g;

    //tokenizing the text and counting word frquencies
    const wordCounts = {};
    const tokens = text.match(wordRegex);

    if(tokens) {
        for(const token of tokens) {
            const word = token.toLowerCase();
            if(wordCounts[word]){
                wordCounts[word]++;
            }
            else{
                wordCounts[word] = 1;
            }
        }
    }

    //Finding the 5 mostly occuring words
     

    
}

router.post("/upload", upload.single("file"), (req, res) => {
  //handle file analysis
  if (!req.file) {
    return res.status(400).json({ error: "No File uploaded" });
  }

  const uploadedFilePath = req.file.path;

  fs.readFile(uploadedFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "File reading error" });
    }

    const analysisResults = analyzeText(data);
    res.json(analysisResults);
  });
});

export default router;
