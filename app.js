// external modules
var config = require('config');
var appConfig = config.get('App');
var http = require('http'); // http server (without express framework)
var express = require('express'); // express framework (page routing)
var db = require('./db');


// express.js engine
var app = express();
app.use(express.static('public')); // public static content
//app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//}));
//app.use(express.urlencoded());
//app.use(express.json());      // if needed

app.get('/', function(req, res) {
  res.sendfile('./public/default.html');
});


app.get('/api/machines', function(req, res) {
  console.log("/api/machines get received");
  db.loadMachines( function(json) {
    console.log ("data rcvd: " + json);
    res.send(json);
    //res.json( orders );
  });
});

app.get('/api/orders', function(req, res) {
  console.log("/api/orders get received");
  db.loadOrdersAll(function(json) {
    res.send(json);
    //res.json( orders );
  });
});


app.get('/api/orders/:machine', function(req, res) {
  var machine = req.params.machine;
  console.log("received request for /api/orders/machine: "  + machine);
  db.loadOrdersMachine(machine, function(json) {
    res.send(json);
    //res.json( orders );
  });
});
app.get('/api/clear/:machine', function(req, res) {
  var machine = req.params.machine;
  console.log("received request for /api/orders/machine: "  + machine);
  db.ClearOrdersMachine(machine, function(json) {
    res.send(json);
    //res.json( orders );
  });
});



//sock.close();

var httpServer = http.createServer(app);
httpServer.listen(appConfig.server.port);
console.log('risk management server starting on http-port: ' + appConfig.server.port);
