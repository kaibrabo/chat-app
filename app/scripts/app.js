(function () {

	function config($locationProvider, $stateProvider) {

         $locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

         $stateProvider
			.state('room', {
				url: '/',
				controller: 'RoomCtrl as room',
				templateUrl: '/templates/home.html'
			})
			
     };

	angular
		.module('chatta', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();
