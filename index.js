console.log("Server is starting");

var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var userInfo = []; // the array with all the user's info
var inputUserData = fs.readFileSync('data.json');
userInfo = JSON.parse(inputUserData)
var inputUserData = [];


app.set('view engine', 'ejs');
app.set('views', '/views');

//setting up server
app.listen(3000, listening);
function listening(){
	console.log("listening")
};

app.post('/home/data', urlencodedParser, postInfo);

// this function takes all the info submitted by user 

function postInfo(request, response){
var fName = request.body.fName;
var lName = request.body.lname;
var age = request.body.age;
var location = request.body.location;

var info = {'First Name':fname, 'Last Name':lname, 'Age':age, 'Location':location};
userInfo.push(info);

fs.writeFile('data.json', JSON.stringify(userInfo),function(err){
	if(err){
		console.log(err);
	}
});

response.redirect('/home');

}
