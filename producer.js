// producer.js 
var zmq = require('zmq')
  , sock = zmq.socket('push');
 
sock.bindSync('tcp://104.222.96.51:33000');
console.log('Producer bound to port 33000');
 
setInterval(function(){
  console.log('sending work');
  sock.send('some work');
}, 500);
