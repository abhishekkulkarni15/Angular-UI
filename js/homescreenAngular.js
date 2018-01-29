var myApp = angular
.module("myModule",[])
.controller("myController", function($scope, $http){

	$scope.timelineSide = "left";
	$scope.currentApp="";
	var toggle = 0;
	var apps = [

	{
		"name": "calculator",
		"description": "A simple calculator application",
		"type": "utility"
	},
	{
		"name": "contacts",
		"description": "A simple contacts application",
		"type": "social"
	},
	{
		"name": "expenseManager",
		"description": "A simple expense manager application",
		"type": "utility"
	},
	{
		"name": "musicPlayer",
		"description": "A simple music player application",
		"type": "entertainment"
	},
	{
		"name": "todoList",
		"description": "A simple to-do application",
		"type": "utility"
	},
	{
		"name": "weather",
		"description": "A simple weather application",
		"type": "utility"
	},
	{
		"name": "facebook",
		"description": "A simple facebook application",
		"type": "social"
	},
	{
		"name": "spotify",
		"description": "A music player",
		"type": "entertainment"
	},
	{
		"name": "chrome",
		"description": "A web browsing application",
		"type": "utility"
	},
	{
		"name": "gallery",
		"description": "A gallery application",
		"type": "utility"
	},
	{
		"name": "keep",
		"description": "A gallery application",
		"type": "utility"
	}
	]

	var openApplication = function(appName){
		$scope.appName = appName;
		$scope.searchQuery="";
		$scope.openApps.push(appName);
		$scope.currentApp = appName+".html";
		if(toggle%2==0){
			$scope.timelineSide = "left";
			toggle = 1;
		}
		else{
			toggle=0;
			$scope.timelineSide = "right";
		}
	}

	$scope.openApplication = openApplication;

	$scope.apps = apps;

	$scope.openApps = [];


});