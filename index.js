const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const path = require('path');

const  PORT = process.env.PORT || 5000;

// Set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebars route

app.get('/', function (req, res) {
    res.render('home', {
        stuff: "This is stuff"
    });
});
 




//create static folder

app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log('Server Listening on Port'+ PORT));
