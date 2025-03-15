const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, phone, role, password } = req.body;

  try {
 
    if (!name || !email || !phone || !role || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    
    const [existingUser] = await db.execute('SELECT * FROM Users WHERE Email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

   
    const [result] = await db.execute(
      'INSERT INTO Users (Name, Email, Phone, Role, PasswordHash) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, role, hashedPassword]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId,
    });
  } catch (err) {
    console.error('Error in /signup route:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

module.exports = router;
