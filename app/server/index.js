const express = require('express');
const jsonParse = require('body-parser').json();

const app = express();

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

app.get('/',(Request,Response)=>Response.send('hello'))
app.post('/signin', jsonParse,(req,res)=>{
    res.send(req.body);
});

app.listen(4000, ()=>console.log('Server is running!'));