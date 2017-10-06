/* JavaScript Document */
// Contains the Angular app

(function(){
  var app = angular.module('myCalculator', []);

  app.controller('calcController', ['$scope', function($scope){
    // declare variables for select menu
    // lumens options
    $scope.lumen_options = [376, 600, 900, 1125, 1600];
    // set current lumens when the page loads
    $scope.current_lumens = 600;
    // set current cost, hours, total days when the page loads
    $scope.current_cost = 13;
    $scope.current_hours = 4;
    $scope.total_days = 365; 

  }]);













})();


