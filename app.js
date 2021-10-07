
const express = require('express');
const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});