const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db'); // Import MySQL connection
const router = express.Router();

// ✅ 1. Create a new chatroom
router.post('/add-chatroom', async (req, res) => {
  const { RoomName, Description, Location, Language } = req.body;
  try {
    const conn = await db; // Get DB connection
    const [result] = await conn.execute(
      'INSERT INTO chatrooms (RoomName, Description, Location, Language) VALUES (?, ?, ?, ?)',
      [RoomName, Description, Location, Language]
    );
    res.status(201).json({ message: 'Chatroom created', RoomID: result.insertId });
  } catch (err) {
    console.error('Error creating chatroom:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ 2. Get all chatrooms
router.get('/display-chatroom', async (req, res) => {
  try {
    const conn = await db;
    const [rows] = await conn.execute('SELECT * FROM chatrooms');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching chatrooms:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ 3. Send a message in a community chat
router.post('/communitychat', async (req, res) => {
  const { UserID, RoomID, Message } = req.body;
  try {
    const conn = await db;
    const [result] = await conn.execute(
      'INSERT INTO communitychat (UserID, RoomID, Message) VALUES (?, ?, ?)',
      [UserID, RoomID, Message]
    );
    res.status(201).json({ message: 'Message sent', MessageID: result.insertId });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ 4. Get all messages in a chatroom
router.get('/communitychat/:roomId', async (req, res) => {
  const { roomId } = req.params;
  try {
    const conn = await db;
    const [rows] = await conn.execute(
      'SELECT * FROM communitychat WHERE RoomID = ? ORDER BY Timestamp',
      [roomId]
    );
    res.json(rows);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ 5. Delete a chatroom (and messages)
router.delete('/chatrooms/:roomId', async (req, res) => {
  const { roomId } = req.params;
  try {
    const conn = await db;
    await conn.execute('DELETE FROM communitychat WHERE RoomID = ?', [roomId]);
    await conn.execute('DELETE FROM chatrooms WHERE RoomID = ?', [roomId]);
    res.json({ message: 'Chatroom and messages deleted' });
  } catch (err) {
    console.error('Error deleting chatroom:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
