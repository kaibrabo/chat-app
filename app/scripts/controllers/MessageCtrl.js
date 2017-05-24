(function(){
	function MessageCtrl($scope) {
		$scope.list = [];
		$scope.text = '';
		$scope.submit = function() {
			if ($scope.text) {
				$scope.list.push(this.text);
				$scope.text = '';
			}
		};
	}
	
	angular
		.module('chatta')
		.controller('MessageCtrl', MessageCtrl);
	
})();