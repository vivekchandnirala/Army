const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Route to save user data
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data.' });
  }
});

module.exports = router;
