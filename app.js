var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendfile('./test.html');
});


app.get('/camera', function(req, res){

  var path = require('path');
  //console.log(path.resolve(__dirname+'/../three.js/examples/basic.html'));
res.sendFile(path.resolve(__dirname+'/aframe/examples/marker-camera.html'));

});

http.listen(3000, function(){
  console.log('listening on *:3000');
})
