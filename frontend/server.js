const express = require('express');
const app = express();
const path = require('path');
const request = require('request');

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
})
