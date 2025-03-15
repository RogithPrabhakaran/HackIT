const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db'); 


app.use(cors());
app.use(express.json());

// Import Routes
const loginRoutes = require('./routes/login'); 
const signupRoutes = require('./routes/signup'); // Ensure the file is named signup.js

// Use Routes
app.use('/routes/login', loginRoutes); 
app.use('/routes/signup', signupRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});