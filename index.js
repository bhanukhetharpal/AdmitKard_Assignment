import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import uploadRoute from "./routes/upload";

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://localhost:3000',
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/upload', uploadRoute);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
