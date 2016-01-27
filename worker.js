// worker.js 
var zmq = require('zmq')
  , sock = zmq.socket('pull');
 
sock.connect('tcp://104.222.96.51:33000');
console.log('Worker connected to port 33000');
 
sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});
