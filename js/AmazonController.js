var app = angular.module('AmazonApp');

app.controller('AmazonController', function($scope, AmazonService){

	$scope.addPrice = '';
	$scope.sortType = '';

	$scope.data = AmazonService.getData();
})