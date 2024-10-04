//create a server
require('dotenv').config()
const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/sam', (req, res) => {
    res.send('Hello sam!');
})

app.get('/name', (req, res) => {
    res.send('Hello name!');
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
