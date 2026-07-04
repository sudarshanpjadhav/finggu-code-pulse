const express = require('express');
const router = express.Router();
const { finggu_analyzeCode } = require('../services/fingguCodeAnalysisService');

router.post('/analyze', (req, res) => {
  const { code } = req.body;
  const feedback = finggu_analyzeCode(code);
  res.json({ feedback });
});

module.exports = router;