baseApp.controller('shoppingcartCtrl', 
['$scope', 'Items', function($scope, Items){

	$scope.items =  Items.query();

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	};

	$scope.add = function(title, quantity, price){
		var item = {'title' : title, 'quantity': quantity, 'price': price };
		$scope.items.push(item);
	};
}]);

var startUpCtrl = baseApp.controller('StartUpCtrl',['$scope', function($scope){
	$scope.funding = { startingEstimate: 0};	
	$scope.computeNeeded = function(){
		$scope.needed = $scope.funding.startingEstimate * 10;
		console.log($scope.needed);
	};
}]);
