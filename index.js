const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const port = 8080

app.get('/', (req, res) => {

    // res.send('Hello World!')
    let email = req.cookies['ttemail'];
    // let email = req.cookies['email'];
    if (email) {
        // return res.send(email);
        res.redirect('/getcookie')
    }
    res.redirect('/setcookie')
})



app.get('/setcookie', function (req, res) {
    // setting cookies
    res.cookie('ttemail', 'dennis.effa@turntabl.io', { maxAge: 900000, httpOnly: false });
    return res.send('Cookie has been set');
});

app.get('/getcookie', function (req, res) {
    let email = req.cookies['ttemail'];
    // let email = req.cookies['email'];
    if (email) {
        return res.send(email);
    }

    return res.send('No cookie found');
});

app.get('/clearcookie', function (req, res) {
    res.clearCookie('ttemail')
    return res.send('Cookie cleared');

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))