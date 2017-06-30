/* 	calculator is a module, it contains the different 
	components of the AngularJS application
*/

// <!-- Modules -->

var app = angular.module("myCalculator", []);

// <!-- Controllers -->

app.controller("calControls", function($scope) {
	$scope.title = "Simple Calculator"; // This displays header1 
	$scope.display = "";				// This sets the value on the screen of calculator to null
	
	$scope.compute = function(val) {	// This function works for numbers and basic operation keys (+,-,/,*)
		$scope.display += val;
	
	}
	
	$scope.del = function(val) {	// function for the delete (clear) button
		$scope.display = "";
	
	}
	
	$scope.sqroot = function() {
		$scope.display = Math.sqrt($scope.display);		// function for square root button
	}
	
	$scope.squared = function() {
		$scope.display = Math.pow($scope.display, 2);	// function for square button
	}
	
	$scope.oneOverVal = function() {
		$scope.display = 1/($scope.display);		// function for 1/x button
	}
	
	$scope.absoluteVal = function() {
		$scope.display = ($scope.display==Math.abs($scope.display)?-($scope.display):Math.abs($scope.display)) // function for ± button
	}
	
	$scope.equalTo = function() {
		$scope.display = eval($scope.display); 		//function for = button
	}
});


