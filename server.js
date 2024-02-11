const express = require('express');
const path = require('path');
const fs = require('fs');

// Set up the Express app
const PORT = process.env.PORT || 3001;
const app = express();

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET route for /api/notes returns the db.json file
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);

// GET route for /notes returns notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// If no matching route is found default to home
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Listen for requests
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);