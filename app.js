const express = require('express');
const path = require('path'); // Require the 'path' module
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Construct the file path using path.join()
    const filePath = path.join('C:', 'Users', 'BGaya', 'OneDrive', 'Desktop', 'Milestones', 'interaction.html');
    res.sendFile(filePath);
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    res.send(`Username is ${username}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
