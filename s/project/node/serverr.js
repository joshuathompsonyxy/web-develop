const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from public directory

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Submitted:', formData);
    res.send('Form data received successfully!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

