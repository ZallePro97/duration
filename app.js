var timeApp = angular.module('timeApp', ['ngRoute']);

timeApp.config(function($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'main.html',
        controller: 'timeController'
    })
    
});



timeApp.directive('timeResult', function() {
   return {
       templateUrl: 'timeresult.html',
       scope: {
           milisecondsDir: "="
       },
       controller: 'timeController'
   } 
}).

controller('timeController', ['$scope', '$parse', function($scope, $parse) {
    
    $scope.milisecondsDir;
    $scope.hours;
    $scope.minutes;
    
    $scope.$watch('hours', function() {
       if ($scope.minutes > 0) {
           $scope.milisecondsDir = $scope.hours * 60 * 60 * 1000 + $scope.minutes * 60 * 1000;
       } else {
           $scope.milisecondsDir = $scope.hours * 60 * 60 * 1000;
       }
    });
    
    $scope.$watch('minutes', function() {
        
        if ($scope.hours > 0) {
            $scope.milisecondsDir = $scope.hours * 60 * 60 * 1000 + $scope.minutes * 60 * 1000;
        } else {
            $scope.milisecondsDir = $scope.minutes * 60 * 1000;
        }
        
        console.log("minuteeee");
    });
    
    $scope.$watch('milisecondsDir', function() {
        $scope.hours = parseInt($scope.milisecondsDir / 1000 / 60 / 60);
        $scope.minutes = parseFloat(($scope.milisecondsDir - $scope.hours * 60 * 60 * 1000) / 1000 / 60);
    });
    
//    $scope.$watch('hours', function() {
//        $scope.milisecondsDir = $scope.hours * 60 * 60 * 1000 + $scope.minutes * 60 * 1000;
//    })
        
    
}]);