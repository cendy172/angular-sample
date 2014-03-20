baseApp.controller('formController', ['$scope', function($scope){
	
	$scope.init = function(){
		$scope.regoNumber = "";		
	};

	$scope.submit = function(){
		console.log("submit form");
	};

	$scope.clear = function(){
		$scope.username = "";
		$scope.password = "";
	};

	var validateRegoNumber = function(){
		return $scope.regoNumber.length >= 4; 
		// if set this function as a $watch value, when return value(true or false) changed, will call the change handler.
	};

	var checkRegoNumber = function(){
		if(validateRegoNumber()){
			console.log("send ajax to check rego number exist.");	
		}
	};

	$scope.$watch('regoNumber', checkRegoNumber);
}]);