import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

console.log(chalk.bgCyan('In Production...'));
app.use(compression());
app.use(express.static('dist'));

app.get('/users', function(req, res){
// In memory data set being used to populate the response object. In real world this will be a database
  res.json([
    {"id": 1, "firstName": "Vinod", "lastName":"Geek", "email": "vinodj@workisworship.com"},
    {"id": 2, "firstName": "Deeapti", "lastName":"Painter", "email": "deeaptip@workisworship.com"},
    {"id": 3, "firstName": "Vihaan", "lastName":"Cricketer", "email": "vihaanj@workisworship.com"}
  ]);
});

app.get('/',function(req, res) {
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port, function(err) {
  if (err){
    console.log(err);
  }
  else
  {
    open('http://localhost:' + port);
  }
})
