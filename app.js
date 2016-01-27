// external modules
var config = require('config');
var appConfig = config.get('App');
var http = require('http');		// http server (without express framework)
var express = require('express');	// express framework (page routing)

// express.js engine
var app = express();
app.use(express.static('public'));      // public static content
//app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//}));
//app.use(express.urlencoded());
//app.use(express.json());      // if needed

app.get('/', function(req, res){
  res.sendfile('./public/orders.html');
});

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

app.get('/api/orders', function(req, res) {
  console.log("/api/orders get received");

  console.log('requesting data');
  sock.send('calendar');

  sock.on('message', function(msg) {
    var json= msg.toString()
    console.log('got ZMQ reply data ');

    res.send (json);
    //res.json( orders );
  });

});

//sock.close();

var httpServer = http.createServer(app);
httpServer.listen(appConfig.server.port);
console.log('risk management server starting on http-port: '  + appConfig.server.port);
