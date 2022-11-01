const express = require('express')
const expresslayouts = require('express-ejs-layouts')
const app = express()
const port = 5100

app.set('view engine', 'ejs')
app.use(expresslayouts)
app.use(express.static('public/image'))
app.use(express.static('public/image/icons'))
app.use(express.static('public/stylesheets'))
app.use(express.static('public/javascript'))


// Routing
app.get('/', (req, res) => {
    res.render('index', {
        title: "Login",
        layout: "layouts/login-layout"
    })
})
app.get('/signup', (req, res) => {
    res.render('signup', {
        title: "Sign Up",
        layout: "layouts/login-layout"
    })
})
app.get('/home', (req, res) => {
    res.render('home', {
        title: "Home",
        layout: "layouts/main-layout"
    })
})
app.get('/menu', (req, res) => {
    res.render('menu', {
        title: "Menu Makanan",
        layout: "layouts/main-layout"
    })
})
app.get('/alatTulis', (req, res) => {
    res.render('alatTulis', {
        title: "Menu Alat Tulis",
        layout: "layouts/main-layout"
    })
})
app.get('/pembayaran', (req, res) => {
    res.render('pembayaran', {
        title: "Pembayaran",
        layout: "layouts/troli-layout"
    })
})
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: "Admin - Dashboard",
        layout: "layouts/admin-layout"
    })
})
app.get('/product', (req, res) => {
    res.render('product', {
        title: "Admin - Product",
        layout: "layouts/admin-layout"
    })
})
app.get('/transaction', (req, res) => {
    res.render('transaction', {
        title: "Admin - Transaction",
        layout: "layouts/admin-layout"
    })
})

app.use('/', (req, res) => {
    res.send('<h1>Eror NOt found 404</h1>')
})





// Listening port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})