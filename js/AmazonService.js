var app = angular.module('AmazonApp');

app.service('AmazonService', function(){
	var data = ['Item 1', "Item 2", "Item 3"];
	this.getData = function(){
		return data;
	}
})