//jshint esversion : 6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const res = require('express/lib/response');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [ "Eat Food", "Eat Fruits",  "Eat Dry Fruits"];

app.get('/', (req, res) => {
    var date = new Date();
  
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = date.toLocaleDateString('en-Us',options);

    res.render('index',{kindOfDay : day, newItems : items });
});

app.post('/',(req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('done');
});