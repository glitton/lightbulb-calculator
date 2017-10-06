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
    $scope.current_cost = 12;
    $scope.current_hours = 3;
    $scope.total_days = 365; 

    // Calculate using conversion rates

    $scope.inc_conversion = .0625; // Incadescent conversion
    $scope.hal_conversion = .0450; // halogen conversion
    $scope.cfl_conversion = .0146; // compact flourescent conversion
    $scope.led_conversion = .0126; // led conversion

    // function to calculate wattage
    // take the lumens * conversion rate
    $scope.calculate = function() {
      //toFixed adds the number of decimal places, in this case it is 1
      $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
      $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
      $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
      $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

      // calculate the price/year to operate these lightbulbs
      // make sure user doesn't enter more than 24 hours/day
      if($scope.current_hours > 24) {
        $scope.current_hours = 24;
      }

        var total_hours = $scope.total_days * $scope.current_hours;
        var cost = $scope.current_cost / 100;

        $scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
        $scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
        $scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
        $scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);
    }



    $scope.calculate();

  }]);













})();


