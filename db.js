var config = require('config');
var appConfig = config.get('App');

var orders = [{
  AccountName: "ME-VFX-CX",
  symbol: "EURUSD"
}, {
  AccountName: "ME-VFX-CX",
  symbol: "USDJPY"
}];

var zmq = require('zmq'),
  sock = zmq.socket('req');

console.log('Connecting to ZMQ order server at ' + appConfig.server.orderUrl);
sock.connect(appConfig.server.orderUrl);

var loadMachines = function(callback) {
  console.log('requesting machines list from zmq');
  sock.send('machines');
  // emitter.addListener(event, listener)is an alias for emitter.on(event, listener).
  //  You can use emitter.removeListener(event, listener)to remove a listener.
  // Or use emitter.once (event, listener) to install a listener "one use
  //sock.on('message', function(msg) {
  sock.once( 'message', function(msg) {
    var json = msg.toString()
    console.log('machines list received from ZMQ.');
    callback(json);
  });
}

var loadOrdersAll = function(callback) {
  console.log('requesting orders all from zmq');
  sock.send('orders_all');
  // emitter.addListener(event, listener)is an alias for emitter.on(event, listener).
  //  You can use emitter.removeListener(event, listener)to remove a listener.
  // Or use emitter.once (event, listener) to install a listener "one use
  //sock.on('message', function(msg) {
  sock.once('message', function(msg) {
    var json = msg.toString()
    console.log('orders all list received from ZMQ.');
    callback(json);
  });
}

var loadOrdersMachine = function(machine, callback) {
  console.log('requesting orders for machine from zmq');
  sock.send(machine);
  // emitter.addListener(event, listener)is an alias for emitter.on(event, listener).
  //  You can use emitter.removeListener(event, listener)to remove a listener.
  // Or use emitter.once (event, listener) to install a listener "one use
  //sock.on('message', function(msg) {
  sock.once('message', function(msg) {
    var json = msg.toString()
    console.log('orders for machine received from ZMQ.');
    callback(json);
  });
}

module.exports.loadOrdersMachine = loadOrdersMachine;
module.exports.loadOrdersAll = loadOrdersAll;
module.exports.loadMachines = loadMachines;
