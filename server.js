var express = require('express');
var app = express();
var fs = require('fs');
var Datastore = require('nedb');
var db = new Datastore({filename: 'store.db', autoload: true});
var bodyParser = require('body-parser');
//app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// var bootstrap = require('bootstrap');

// app.use(express.static('/Users/venkat/Desktop/login/css'));
// app.use(express.static('/Users/venkat/Desktop/login/js'));
// app.use(express.static('/Users/venkat/Desktop/login/fonts'));
// app.use(/public, express.static('/Users/venkat/Desktop/login'));

app.use(express.static(__dirname + '/public'));
//this will display the signup page
app.get('/signup', function (req, res) {
  fs.readFile('two.html',  function(err, contents) {
      res.send(contents.toString());
  });
});





//this will display the login page
fs.readFile('index.html',  function(err, contents) {

    app.get('/', function (req, res) {
      res.send(contents.toString());
    });
});






//this manage the authentication part and route to /hello stating successful or not successful
app.post('/hello', function (req, res) {
  db.find({username:req.body.usrname,password:req.body.pass}, function(err,result){

          if(err) throw err;

        	if(result.length==0)
          	{

          res.send('Sorry!! You will have to signup!!'
          +
          '<br>'+
          '<form action="/signup" method="get">'+
          '<input type="submit" value="signup">'+
          '<form>');

      	     }

	     else{

            res.send('hello ' + req.body.usrname + ' successfully logged in!!!!!');
            req.body.usrname='';
            req.body.pass='';

      	     }

          })
});





//this function will tell whether successfully signedup or not
app.post('/add', function (req, res) {
var u = req.body.usr;
var p = req.body.pass;
    if(u==''&& p=='')
      {
      res.send('Please fill in the credentials'+
      '<br>'+
      '<form action="/signup" method="get">'+
      '<input type="submit" value="go back to signup">'+
      '<form>'
    );
      }
      else
      {
        var doc = {username:u, password:p};
        db.insert(doc,function(err,insertedDoc){
            if(err) throw err;
            res.send('You have successfully signed up'+
            '<br>'+
            '<form action="/" method="get">'+
            '<input type="submit" value="go back to login">'+
            '<form>'
          );
	})
      }
});



//this function will run the server on port 3000
//app.listen(3000, function () {
//  console.log('The webapp is running on 3000 port');
//});
