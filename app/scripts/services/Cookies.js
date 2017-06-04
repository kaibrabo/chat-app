(function() {
    function BlocChatCookies($cookies, $uibModal) {

        var currentUser = $cookies.get('ChattaCurrentUser');

        if (!currentUser || currentUser === '') {
            // Do something to allow users to set their username
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
