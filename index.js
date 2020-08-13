// comments

const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const path = require('path');
const request = require('request');
const { json } = require('express');

const  PORT = process.env.PORT || 5000;

// API Key pk_3d10af7b6ff049109b835004803eb5a2
// create call API fucntion
function call_api(){
    request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_3d10af7b6ff049109b835004803eb5a2', {json:true}, (err, res, body) => {
    if(err) {return console.log(err);}
    console.log(body);
    if (res.statusCode === 200){
        //console.log(body);
        return body

    }


});


}

request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_3d10af7b6ff049109b835004803eb5a2', {json:true}, (err, res, body) => {
    if(err) {return console.log(err);}
    console.log(body);
    if (res.statusCode === 200){
        console.log(body);

    }


});

// Set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebars route

app.get('/', function (req, res) {
    const api = call_api();
    console.log(api);
    res.render('home', {
        stock: api
    });
});

app.get('/about.html', function (req, res) {
    res.render('about');
});
 




//create static folder

app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log('Server Listening on Port'+ PORT));
