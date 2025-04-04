const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.get('/', (req, res) => {
  res.send('Hello from Node.js & Express 👋');
});

app.use(express.json());

const userRoutes = require('./endpoints/UserEndpoint');
app.use('/api/users', userRoutes);

const postRoutes = require('./endpoints/PostEndpoint');
app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});