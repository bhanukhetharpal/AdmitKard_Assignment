import express from "express";
import multer from "multer";
import analyzeText from "../controllers/analyze/analyze.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    //handle file analysis
    if (!req.file) {
      return res.status(400).json({ error: "No File uploaded" });
    }
    const uploadedFilePath = req.file.path;
    const analysisResults = await analyzeText(uploadedFilePath);
    console.log(analysisResults);
    res.json(analysisResults);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the file." });
  }
});

export default router;
