// worker.js 
var zmq = require('zmq')
  , sock = zmq.socket('req');
 
sock.connect('tcp://104.222.96.51:33333');
console.log('Worker connected to port 33333');

sock.on('message', function(msg){
  console.log('reply data received: %s', msg.toString());
  sock.close();
});

console.log('requesting data');
sock.send('calendar');

