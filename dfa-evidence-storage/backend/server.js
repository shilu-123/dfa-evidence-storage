const express = require('express');
const bodyParser = require('body-parser');
const { encryptData, decryptData } = require('./encryption');

const app = express();
app.use(bodyParser.json());

app.post('/encrypt', async (req, res) => {
  const { data } = req.body;
  const result = await encryptData(data);
  res.json (result);
});

app.listen(5000, () => console.log('Backend running on port 5000'));