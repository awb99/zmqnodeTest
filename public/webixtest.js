//var app = angular.module('myApp', []);

angular.module('root', ["webix"])

.controller("riskController", ["$scope", "$http", function($scope, $http) {

      $scope.myName = 'Risk Management Console';

      $http.get('dummyOrders.json').success(function(data) {
        // after receiving the JSON data from the web-api call, set the start data of the model
        console.log("orders received: items:" + data.length);
        //console.log("data= " + JSON.stringify(data));
        $scope.orders = data;
      });

      $scope.orders = [
          {
          "LogTime": "2015-07-14T03:28:34.161256Z",
          "LogMicro": 256,
          "LogTimeFull": "2015-07-14 03:28:34.161/256",
          "FixApi": "CURRENEX",
          "FixCompID": "vel000233trd",
          "FixOrderID": "1387758748",
          "ID": 0,
          "AccountName": "OC-VTRD-CX",
          "Symbol": "USDSEK",
          "Action": "SELL",
          "Quantity": 100000,
          "Price": 8.59198,
          "SendTime": "2015-07-14T07:28:34.192Z",
          "OrderType": 2,
          "Status": "Canceled",
          "Comment": "",
          "RejectReason": null,
          "Strategy": null,
          "OC": null,
          "Executed": 0,
          "NonLiveReceived": true,
          "OpenQuantity": 0,
          "RT_OK": true,
          "AccountNumber": "OC-VTRD-CX"
        }, {
          "LogTime": "2015-07-14T03:28:34.161298Z",
          "LogMicro": 298,
          "LogTimeFull": "2015-07-14 03:28:34.161/298",
          "FixApi": "CURRENEX",
          "FixCompID": "vel000233trd",
          "FixOrderID": "1387758749",
          "ID": 0,
          "AccountName": "OC-VTRD-CX",
          "Symbol": "USDSEK",
          "Action": "SELL",
          "Quantity": 100000,
          "Price": 8.59198,
          "SendTime": "2015-07-14T07:28:34.192Z",
          "OrderType": 2,
          "Status": "Expired",
          "Comment": "",
          "RejectReason": null,
          "Strategy": null,
          "OC": null,
          "Executed": 0,
          "NonLiveReceived": true,
          "OpenQuantity": 0,
          "RT_OK": true,
          "AccountNumber": "OC-VTRD-CX"
        }, {
          "LogTime": "2015-07-14T03:28:34.161314Z",
          "LogMicro": 314,
          "LogTimeFull": "2015-07-14 03:28:34.161/314",
          "FixApi": "CURRENEX",
          "FixCompID": "vel000233trd",
          "FixOrderID": "1387758750",
          "ID": 0,
          "AccountName": "OC-VTRD-CX",
          "Symbol": "USDSEK",
          "Action": "BUY",
          "Quantity": 100000,
          "Price": 8.39198,
          "SendTime": "2015-07-14T07:28:34.192Z",
          "OrderType": 2,
          "Status": "Canceled",
          "Comment": "",
          "RejectReason": null,
          "Strategy": null,
          "OC": null,
          "Executed": 0,
          "NonLiveReceived": true,
          "OpenQuantity": 0,
          "RT_OK": true,
          "AccountNumber": "OC-VTRD-CX"
        }, {
          "LogTime": "2015-07-14T03:28:34.161338Z",
          "LogMicro": 338,
          "LogTimeFull": "2015-07-14 03:28:34.161/338",
          "FixApi": "CURRENEX",
          "FixCompID": "vel000233trd",
          "FixOrderID": "1387758751",
          "ID": 0,
          "AccountName": "OC-VTRD-CX",
          "Symbol": "USDSEK",
          "Action": "BUY",
          "Quantity": 100000,
          "Price": 8.39198,
          "SendTime": "2015-07-14T07:28:34.192Z",
          "OrderType": 2,
          "Status": "Expired",
          "Comment": "",
          "RejectReason": null,
          "Strategy": null,
          "OC": null,
          "Executed": 0,
          "NonLiveReceived": true,
          "OpenQuantity": 0,
          "RT_OK": true,
          "AccountNumber": "OC-VTRD-CX"
        }, {
          "LogTime": "2015-07-14T03:28:34.161363Z",
          "LogMicro": 363,
          "LogTimeFull": "2015-07-14 03:28:34.161/363",
          "FixApi": "CURRENEX",
          "FixCompID": "vel000233trd",
          "FixOrderID": "1387758752",
          "ID": 0,
          "AccountName": "OC-VTRD-CX",
          "Symbol": "USDSEK",
          "Action": "SELL",
          "Quantity": 100000,
          "Price": 8.59198,
          "SendTime": "2015-07-14T07:28:34.192Z",
          "OrderType": 2,
          "Status": "Canceled",
          "Comment": "",
          "RejectReason": null,
          "Strategy": null,
          "OC": null,
          "Executed": 0,
          "NonLiveReceived": true,
          "OpenQuantity": 0,
          "RT_OK": true,
          "AccountNumber": "OC-VTRD-CX"
        }];

}]);
