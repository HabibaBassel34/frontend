const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the Angular dist directory
app.use(express.static(path.join(__dirname, 'dist/event-planner-frontend/browser')));

// Handle all routes by serving index.html (for Angular routing)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/event-planner-frontend/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server listening on port ${PORT}`);
});
