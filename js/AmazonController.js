var app = angular.module('AmazonApp');

app.controller('AmazonController', function($scope, AmazonService){

	$scope.sortType = '';

	$scope.data = AmazonService.getData();
})