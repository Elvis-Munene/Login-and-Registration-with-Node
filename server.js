const express = require('express');

const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.use(express.urlencoded({ extended: false }));



app.set('views', './views');
app.set('view engine', 'ejs');



app.post("/registar", async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password)
        users.push({
            id:Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        res.redirect("/login")

    } catch{
        
     res.redirect("/registar")
    }
})


//Routes

app.get('/', (req, res) => {
    res.render("index.ejs");
})



app.get('/login', (req, res) => {
    res.render("login.ejs");
});


app.get('/registar', (req, res) => {
    res.render("registar.ejs");
});

//End Routes

console.log(users);

app.listen(3000);


