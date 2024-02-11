const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// GET route for /notes returns notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// If no matching route is found default to home
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);