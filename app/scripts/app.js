(function () {

	function config($locationProvider, $stateProvider) {

         $locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'LandingCtrl as landing',
				templateUrl: '/templates/landing.html'
			});

         $stateProvider
			.state('room', {
				url: '/home',
				controller: 'RoomCtrl as room',
				templateUrl: '/templates/home.html'
			});
     }

	angular
		.module('chatta', ['ui.router', 'firebase',])
		.config(config);
})();
