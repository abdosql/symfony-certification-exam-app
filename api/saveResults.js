const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const newResult = req.body;
      console.log('Received new result:', newResult);
      
      // Get existing results
      let results = await kv.get('exam_results') || [];
      console.log('Existing results:', results);
      
      // Add new result
      results.push(newResult);
      
      // Save updated results
      await kv.set('exam_results', results);
      console.log('Updated results saved');
      
      res.status(200).json({ message: 'Results saved successfully' });
    } catch (error) {
      console.error('Error saving results:', error);
      res.status(500).json({ error: 'Failed to save results', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};