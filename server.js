const express = require('express');

const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index.ejs");
})



app.get('/login', (req, res) => {
    res.render("login.ejs");
});


app.get('/registar', (req, res) => {
    res.render("registar.ejs");
});


app.listen(3000);


