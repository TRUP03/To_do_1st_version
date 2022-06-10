//jshint esversion : 6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Date = require(__dirname + '/date,.js');



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

var items = ["Eat Food", "Eat Fruits", "Eat Dry Fruits"];
var workItems = [];

app.get('/', (req, res) => {


    var day = Date.getDay();
   
    res.render('index', {
        listTitle: day,
        newItems: items
    });
});

app.post('/', (req, res) => {  
    console.log(req.body);
    var item = req.body.newItem;
  
    if (req.body.listT === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render("index", {
        listTitle: "Work List",
        newItems: workItems
    });
});

app.post('/work', (req, res) => {
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('done');
});
