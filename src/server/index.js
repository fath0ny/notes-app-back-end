//  Kode tersebut untuk menyiapkan server Express agar bisa menerima data JSON dan mengatur alamat (endpoint) API secara rapi dan terpisah.

import express from 'express';
import routes from '../routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(routes);

export default app;