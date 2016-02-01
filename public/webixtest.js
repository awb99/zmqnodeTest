//var app = angular.module('myApp', []);

angular.module('root', ["webix"])

.controller("riskController", ["$scope", "$http", function($scope, $http) {

  $scope.myName = 'Risk Management - Orders ';
  $scope.machine= {};
  $scope.machine = {};
  $scope.isLoading = true;
  $scope.orders = [];

  // load machine list on startup
  $http.get('/api/machines').success(function(data) {
    // the server has various dummy json files; request those for testing:
    // 1.: dummyOrders.json
    // after receiving the JSON data from the web-api call, set the start data of the model
    console.log("machines received: items:" + data.length);
    //console.log("data= " + JSON.stringify(data));
    $scope.machines = data;
  });


  $scope.load_orders = function(predicate) {
    // we are loading, and dont haveany orders
    $scope.isLoading = true;
    $scope.orders = [];

    var reqUrl = '/api/orders/' + $scope.machine;
    console.log("requesting orders for machine: " +reqUrl);

    $http.get(reqUrl).success(function(data) {
      // the server has various dummy json files; request those for testing:
      // 1.: dummyOrders.json
      // after receiving the JSON data from the web-api call, set the start data of the model
      console.log("orders received: items:" + data.length);
      //console.log("data= " + JSON.stringify(data));
      $scope.orders = data;
      $scope.isLoading = false;
    });
  };

  $scope.clear_data = function(predicate) {
    $scope.orders = [];
    var reqUrl = '/api/clear/' + $scope.machine;
    console.log("clearing orders for machine: " +reqUrl);
    $http.get(reqUrl).success(function(data) {
      console.log("cleared data.");
    });
  };


$scope.load_orders(); //on page load, loadorders.

}]);
