const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js & Express 👋');
});

app.use(express.json());

const userRoutes = require('./endpoints/UserEndpoint');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});