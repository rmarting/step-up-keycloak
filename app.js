const express = require('express');
const stringReplace = require('string-replace-middleware');

const KC_URL = process.env.KC_URL || "http://localhost:8180";
const APP_PORT = process.env.APP_PORT || "8280"; 
const APP_URL = process.env.APP_URL || "http://localhost:" + APP_PORT;

const app = express();

app.use(stringReplace({
   'KC_URL': KC_URL,
   'APP_URL': APP_URL
}));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/secured', function(req, res) {
    res.sendFile(__dirname + "/secured.html");
});

app.listen(APP_PORT, () => {
    console.log("Application started and Listening on port " + APP_PORT);
});
