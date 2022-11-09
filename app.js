const  express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))


let newItems = []; 
let workList = [];
var today = new Date();
const option = {
  weekday : "long",
  day     : "numeric",
  month   : "long"
}

let currentDay = today.toLocaleDateString("en-IN", option);

app.get("/", function(req, res) {

    var today = new Date();
    const option = {
      weekday : "long",
      day     : "numeric",
      month   : "long"
    }

    let currentDay = today.toLocaleDateString("en-IN", option);

    res.render('embebbed', {dayType : currentDay, newlistItem : newItems})

});

app.post('/', function(req, res){
     let newlisting = req.body.input;
     if(newlisting == ""){
      console.log("Text not entered")
     }else{
     newItems.push(newlisting);
     res.redirect('/');
     }
})

app.get("/work", function(req,res) {
      res.render('work', {dayType: currentDay, workItems:  workList})
})

app.post('/work', function(req, res){
      let workinput = req.body.workinput;
      if(workinput == ""){
            console.log("Text not entered")
      }else{
      workList.push(workinput);
      console.log(workinput);}
      res.redirect("/work");
})

app.listen(3000)