import express from "express";
import multer from "multer";
import analyzeText from "../controllers/analyze/analyze.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
  //handle file analysis
  if (!req.file) {
    return res.status(400).json({ error: "No File uploaded" });
  }

  const uploadedFilePath = req.file.path;
  const analysisResults = analyzeText(uploadedFilePath);
  res.json(analysisResults);
});

export default router;
