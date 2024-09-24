const { kv } = require('@vercel/kv');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'default_admin_password';

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { participantId, adminPassword } = req.body;

      if (adminPassword !== ADMIN_PASSWORD) {
        return res.status(403).json({ success: false, message: 'Invalid admin password' });
      }

      let results = await kv.get('exam_results') || [];
      const updatedResults = results.filter(result => result.participant.email !== participantId);

      if (results.length === updatedResults.length) {
        return res.status(404).json({ success: false, message: 'Participant not found' });
      }

      await kv.set('exam_results', updatedResults);

      res.status(200).json({ success: true, message: 'Participant deleted successfully' });
    } catch (error) {
      console.error('Error deleting result:', error);
      res.status(500).json({ success: false, message: 'Failed to delete participant', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};