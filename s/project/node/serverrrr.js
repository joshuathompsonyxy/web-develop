const express = require('express'); // express framework 
const bodyParser = require('body-parser'); // parsing incoming request
const path = require('path'); // module to work with file and directory

const app = express(); // starts the express application
const port = 3000; // sets the port number 

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from public directory

app.post('/submit-form', (req, res) => { //route to handle form submissions sent to "/submit-form"
    const formData = req.body; //extract form data
    console.log('Form Submitted:', formData); // log the received data
    res.send('Form data received successfully!'); // send a response back to client
});

app.listen(port, () => { // start the server and listen for connections
    console.log(`Server running on http://localhost:${port}`);
});

