const express = require('express')
const app = express()
const fs = require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());


app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/test.html');
});

app.get('/camera', function(req, res){
  var path = require('path');
  //console.log(path.resolve(__dirname+'/../three.js/examples/basic.html'));
res.sendFile(path.resolve(__dirname+'/aframe/examples/marker-camera.html'));

});

app.put('/updategltf', function(req, res){
  const data = req.body;
  fs.writeFileSync("./public/vache_color_001.gltf", JSON.stringify(data), {encoding: 'utf-8'});
  res.sendStatus(200);
});
app.listen(3000, function(){
  console.log('listening on *:3000');
})
