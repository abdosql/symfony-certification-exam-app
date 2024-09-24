const fs = require('fs').promises;
const path = require('path');

const resultsFilePath = path.join('/tmp', 'exam_results.json');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const newResult = req.body;
      let results = [];

      try {
        const data = await fs.readFile(resultsFilePath, 'utf8');
        results = JSON.parse(data);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      }

      results.push(newResult);

      await fs.writeFile(resultsFilePath, JSON.stringify(results, null, 2), 'utf8');
      res.status(200).json({ message: 'Results saved successfully' });
    } catch (error) {
      console.error('Error saving results:', error);
      res.status(500).json({ error: 'Failed to save results' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};