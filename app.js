var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var express = require('express');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//set up jade for views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(3000);

app.get('/', function (req, res) {
    res.render('index', { title: 'Welcome' });
});

app.get('/about', function (req, res) {
    res.render('about', { title: 'About forMeditators' });
});

app.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

// TODO: Gmail has stopped less secure emails. Need to use OAuth2. Exercise left for future.
app.post('/contact/send-email', function (req, res) {

    console.log('Sending email');
});
console.log('Server is running on port 3000');


