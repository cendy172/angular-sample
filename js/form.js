baseApp.controller('formController', ['$scope', function($scope){
	$scope.init = function(){
		$scope.message = '';
	};

	$scope.addUser = function(){
		console.log("success");
		$scope.message = "Thanks " + $scope.user.first + " " + $scope.user.last + ", we added you!";
	};
}]);