const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 4000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// used to bind or listen connection on host and port
app.listen(PORT, (req, res) => {
    console.log('Running at',PORT)
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,"public", "Home.html"))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname,"public", "About.html"))
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname,"public", "Contact.html"))
// })

app.use(express.static(path.join(__dirname,"public")))
// app.use(express.static(path.join(__dirname,"register")))

app.get('/Signup.html', (req, res) => {
    res.sendFile(path.join(__dirname,"register", "Signup.html"))
})
app.post('/Signup.html', (req, res) => {
    res.send(req.body)
})