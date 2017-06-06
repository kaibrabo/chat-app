(function() {
    function BlocChatCookies($cookies, $uibModal) {

        var currentUser = $cookies.get('ChattaCurrentUser');

        // pops up if no user is logged-in/registered in cookies
        // at the launch of app
        if (!currentUser || currentUser === '') {

            // opens modal to allow users to set their username
            $uibModal.open({
                templateUrl: '/templates/cookies.html',
				controller: 'CookiesInstanceCtrl',
                controllerAs: 'cookies',
				size: 'sm'
            });
        }
    };

    angular
        .module('chatta')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
