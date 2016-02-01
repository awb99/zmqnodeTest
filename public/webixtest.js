//var app = angular.module('myApp', []);

angular.module('root', ["webix"])

.controller("riskController", ["$scope", "$http", function($scope, $http) {

  $scope.myName = 'Risk Management - Orders ';

  $scope.isLoading = true;
  $scope.orders = [];

  $scope.load_orders = function(predicate) {
    $scope.isLoading = true;
    $scope.orders = [];
    $http.get('/api/orders').success(function(data) {
      // the server has various dummy json files; request those for testing:
      // 1.: dummyOrders.json
      // after receiving the JSON data from the web-api call, set the start data of the model
      console.log("orders received: items:" + data.length);
      //console.log("data= " + JSON.stringify(data));
      $scope.orders = data;
      $scope.isLoading = false;
    });
  };

$scope.load_orders(); //on page load, loadorders.

}]);
