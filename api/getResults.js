const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const results = await kv.get('exam_results') || [];
      res.status(200).json(results);
    } catch (error) {
      console.error('Error reading results:', error);
      res.status(500).json({ error: 'Failed to read results' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};