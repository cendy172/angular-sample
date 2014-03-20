baseApp.controller('focusCtrl', ['$scope', function($scope){
	$scope.submit = function(){
		$scope.submitMessage = "submited!";
	};
}]);

baseApp.directive('submitFocus', function(){
	return {
		restrict: 'AC',
		link: function(scope, element, attrs, controller){
			element[0].focus();
		}
	};
});