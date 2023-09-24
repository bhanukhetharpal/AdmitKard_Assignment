import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(bodyParser.urlencoded({extended: true}));

import uploadRoute from './routes/upload.js';
app.use('/api', uploadRoute);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
