const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const saveResults = require('./saveResults');
const getResults = require('./getResults');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/saveResults', saveResults);
app.get('/api/getResults', getResults);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});