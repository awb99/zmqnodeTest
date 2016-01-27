
//var app = angular.module('myApp', []);

angular.module('root', [])


.controller("willy", ["$scope", "$http", function($scope, $http) {
  $scope.orders = [];

  $http.get('api/orders').success(function(data) {
    // after receiving the JSON data from the web-api call, set the start data of the model
    console.log("orders list received: items:" + data.length);
    //console.log("data= " + JSON.stringify(data));
    $scope.orders = data;
  });






}]);
