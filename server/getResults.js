const fs = require('fs').promises;
const path = require('path');

const resultsFilePath = path.join(__dirname, 'exam_results.json');

async function getResults(req, res) {
  try {
    const data = await fs.readFile(resultsFilePath, 'utf8');
    const results = JSON.parse(data);
    res.status(200).json(results);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(200).json([]);
    } else {
      console.error('Error reading results:', error);
      res.status(500).json({ error: 'Failed to read results' });
    }
  }
}

module.exports = getResults;