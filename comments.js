// Create web server
// 1. Create web server
// 2. Read comments.json
// 3. Convert to Javascript object
// 4. Send to browser

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Read comments.json
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// 3. Convert to Javascript object
app.get('/comments', (req, res) => {
    res.send(comments);
});

// 4. Send to browser
app.listen(port, () => console.log(`Example app listening on port ${port}!`));