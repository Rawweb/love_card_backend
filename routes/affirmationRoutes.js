const express = require('express');
const affirmations = require('../data/affirmations');

const router = express.Router();

let lastIndex = null;

router.get('/api/affirmation', (req, res) => {
  try {
    if (affirmations.length === 0) {
      return res.status(400).json({ message: ' No affirmations available' });
    }

    let index;

    do {
      index = Math.floor(Math.random() * affirmations.length);
    } while (index === lastIndex && affirmations.length > 1);

    lastIndex = index;

    res.json({
      affirmation: affirmations[index].text,
      mood: affirmations[index].mood,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error ' });
  }
});

module.exports = router;
