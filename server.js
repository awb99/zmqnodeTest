// producer.js 
var zmq = require('zmq')
  , sock = zmq.socket('rep');
 
sock.bindSync('tcp://104.222.96.51:35000');
console.log('Server bound to port 35000');
 
sock.on('message', function(msg){
  var message = msg.toString();
  console.log('received request');
  sock.send('pong');
});

