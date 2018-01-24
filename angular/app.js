myApp = angular.module("myModule",[]);

myApp.controller('myCtrl', function($scope,$http) {
    $scope.message = "Calling function... "
    $scope.IsVisible = false;
    $scope.myFunc = function() {
       var url = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
		$scope.message = "This page will be used to display add student form";
		$http.get(url).then( function(response) {
		   $scope.data = response.data;
		}); 
		$scope.IsVisible = $scope.IsVisible ? false : true;
    }
    $scope.myFunc1 = function() {
        var url = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
		$scope.message = "This page will be used to display add student form";
		$http.get(url).then( function(response) {
			$scope.data = response.data;
		});
		$scope.IsVisible = $scope.IsVisible ? false : true;
    }
});
