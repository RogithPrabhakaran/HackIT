const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
   
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

 
    const [user] = await db.execute('SELECT * FROM Users WHERE Email = ?', [email]);
    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user[0].PasswordHash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user[0].UserID, role: user[0].Role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

   
    res.status(200).json({
      message: 'Login successful',
      token,
      userId: user[0].UserID,
      role: user[0].Role,
    });
  } catch (err) {
    console.error('Error in /login route:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

module.exports = router;
