const express = require('express');
const router = express.Router();
const db = require('../db');

// 1. Track Daily Recovery Progress
router.post('/daily', (req, res) => {
  const { userId, sobrietyDays, moodRating, notes } = req.body;
  const date = new Date();

  const query = `
    INSERT INTO RecoveryProgress (UserID, Date, SobrietyDays, MoodRating, Notes)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [userId, date, sobrietyDays, moodRating, notes], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).send('Progress recorded successfully');
  });
});

// 2. Monitor Mood and Emotional State (Last 7 Entries)
router.get('/mood/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT Date, MoodRating 
    FROM RecoveryProgress 
    WHERE UserID = ? 
    ORDER BY Date DESC 
    LIMIT 7
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// 3. Generate Recovery Reports
router.get('/report/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT Date, SobrietyDays, MoodRating, Notes 
    FROM RecoveryProgress 
    WHERE UserID = ? 
    ORDER BY Date DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// 4. Identify and Alert Relapse Risks
router.get('/alerts/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT MoodRating, Date 
    FROM RecoveryProgress 
    WHERE UserID = ? 
    ORDER BY Date DESC 
    LIMIT 10
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const lowMoodCount = results.filter((entry) => entry.MoodRating === '1').length;

    if (lowMoodCount >= 3) {
      return res.status(200).send('⚠️ Alert: Sustained low mood detected. Consider intervention.');
    }
    res.status(200).send('✅ No alerts.');
  });
});

// 5. Personal Reflection and Journaling
router.get('/notes/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT Date, Notes 
    FROM RecoveryProgress 
    WHERE UserID = ? AND Notes IS NOT NULL 
    ORDER BY Date DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// 6. Analyze Recovery Success Metrics (Average Sobriety Days)
router.get('/metrics/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT AVG(SobrietyDays) AS avgSobriety 
    FROM RecoveryProgress 
    WHERE UserID = ?
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results[0]);
  });
});

// 7. Support Data-Driven Therapy (Full User Progress)
router.get('/therapy/:userId', (req, res) => {
  const { userId } = req.params;
  const query = `
    SELECT * 
    FROM RecoveryProgress 
    WHERE UserID = ? 
    ORDER BY Date DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

module.exports = router;
