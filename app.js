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
    const favoritedriver = req.body.favoritedriver;
    const favoriteteam = req.body.favoriteteam;
    const watchingyear = req.body.watchingyear;
    const time = req.body.time;
    const attend = req.body.attend;

    
    // Concatenate all the data into a single string
    const userInput = `Favorite driver is ${favoritedriver}, Favorite 2024 team is ${favoriteteam}, Year you started watching is ${watchingyear},
     Race time: ${time}, Attend race: ${attend} `;

    // calls unserInput
    res.send(userInput);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
