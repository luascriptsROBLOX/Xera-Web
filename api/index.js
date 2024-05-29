const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get('/wxz', (req, res) => {
    res.sendFile('wxz.html', { root: path.join(__dirname, '..', 'public') })
})

app.get('/github', (req, res) => {
    res.redirect("https://github.com/Waza80")
})

app.get('/logger', (req, res) => {
    res.send(`Successfully logged ${req.ips} to database`)
})

app.listen(3000 , () => {
    console.log("Website is connected")
});