const express =  require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000 ;


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

app.get('/logo.png', function(req, res) {
    res.sendFile(__dirname + "/" + "logo.png");
  });

app.get('/logo.ico', function(req, res) {
    res.sendFile(__dirname + "/" + "logo.ico");
  });

  app.get('/tab.js', function(req, res) {
    res.sendFile(__dirname + "/" + "tab.js");
  });

  app.get('/menu', function(req, res) {
    res.sendFile(__dirname + "/" + "menu.html");
  });

  app.get('/QuizRapideAvance', function(req, res) {
    res.sendFile(__dirname + "/" + "QRA.html");
  });

  app.get('/QuizRapideCommun', function(req, res) {
    res.sendFile(__dirname + "/" + "QRA.html");
  });

  app.get('/QuizCommun', function(req, res) {
    res.sendFile(__dirname + "/" + "quizCommun.html");
  });

  app.get('/quizNormal', function(req, res) {
    res.sendFile(__dirname + "/" + "quizNormal.html");
  });



app.listen(port, ()=>{
    console.log("server running");
});

