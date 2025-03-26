const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Node.js API is running');
});

app.listen(PORT, () => {
  console.log(`Node.js server running on port ${PORT}`);
});
