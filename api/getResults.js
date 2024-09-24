const fs = require('fs').promises;
const path = require('path');

const resultsFilePath = path.join('/tmp', 'exam_results.json');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
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
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};