const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const FRONTEND_HOST = process.env.FRONTEND_HOST || 'http://localhost:5173';

app.post('/api/session', (req, res) => {
  const id = uuidv4();
  const url = `${FRONTEND_HOST}/?room=${id}`;
  res.json({ id, url });
});

app.get('/', (req, res) => res.send('Coding interview backend'));

app.listen(PORT, () => console.log(`API server listening on ${PORT}`));
