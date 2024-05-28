const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index2.html')
})
app.get('/pet', function(req, res){
    res.send("Pet Shopping Webpage")
})
app.get('/beauty', function(req, res){
    res.send("Beauty Shopping Webpage")
})
app.get('/bootstrap', function(req, res){
    res.sendFile(__dirname + '/bootstrap.html')
})