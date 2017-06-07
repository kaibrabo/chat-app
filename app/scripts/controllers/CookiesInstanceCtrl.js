(function() {
    function CookiesInstanceCtrl(Room, $uibModalInstance, $cookies) {

        this.createUsername = function() {

            // disables signUp if input is empty
            if (!this.username || this.username === ''){

                return;
            }

            // if a username is entered...
            // assigns the cookies current user w/ this.username
            $cookies.put('ChattaCurrentUser', this.username);

            $uibModalInstance.close();
        }


    }

    angular
        .module('chatta')
        .controller('CookiesInstanceCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesInstanceCtrl]);
})();
