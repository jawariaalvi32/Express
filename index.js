const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 4000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// used to bind or listen connection on host and port
// app.listen(PORT, (req, res) => {
//     console.log('Running at',PORT)
// })
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,"public", "Home.html"))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname,"public", "About.html"))
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname,"public", "Contact.html"))
// })

let users = [
    {id:1,email:'faz.pak@gmail.com',password:'1111'},
    {id:2,email:'abeer@gmail.com',password:'2222'}    
]
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"register")))

// app.get('/Signup.html', (req, res) => {
//     res.sendFile(path.join(__dirname,"register", "Signup.html"))
// })

app.post('/Signup.html', (req, res) => {
    let found = users.some((item)=>item.email == req.body.email)
    if (found) {
        res.send("Email already exist")
    } else {
        users.push({
            email:req.body.email,
            password: req.body.psw,
            id:users.length+1
        })
        res.redirect('/Signin.html');
    }  
})

// app.get('/Signin.html', (req, res) => {
//     res.sendFile(path.join(__dirname,"register", "Signin.html"))
// })
app.post('/Signin.html', (req, res) => {
    let found = users.some((item)=>item.email == req.body.email && item.password == req.body.psw)

    if (found) {
        res.send("Welcome")
    } else {
        res.send("Incorrect email or password")
    }  
})