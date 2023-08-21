const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/telehealth', function (req,res){
    res.render('telehealth')
})

app.listen(3000)