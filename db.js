var config = require('config');
var appConfig = config.get('App');

var orders = [
   {
     AccountName: "ME-VFX-CX",
     symbol: "EURUSD"
   },
 {
     AccountName: "ME-VFX-CX",
     symbol: "USDJPY"
   }
];

var zmq = require('zmq')
  , sock = zmq.socket('req');

  console.log('Connecting to ZMQ order server at ' +appConfig.server.orderUrl );
  sock.connect(appConfig.server.orderUrl);

var loadOrders= function(callback) {
  console.log('requesting orders data from zmq');
  sock.send('calendar');
  // emitter.addListener(event, listener)is an alias for emitter.on(event, listener).
  //  You can use emitter.removeListener(event, listener)to remove a listener.
  // Or use emitter.once (event, listener) to install a listener "one use
  //sock.on('message', function(msg) {
  sock.once ('message', function(msg) {
    var json= msg.toString()
    console.log('got ZMQ reply data ');
    callback(json);
  });
}

module.exports.loadOrders = loadOrders;
