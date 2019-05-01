const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const puerto = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'francisco'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(puerto, () => {
    console.log(`Escuchando peticiones del puerto ${ puerto }`);
});