(function() {
    function CookiesInstanceCtrl(Room, $uibModalInstance, $cookies) {

        this.createUsername = function() {

            if (!this.username || this.username === ''){
                
                return;
            }

            $cookies.put('ChattaCurrentUser', this.username);

            $uibModalInstance.close();
        }


    }

    angular
        .module('chatta')
        .controller('CookiesInstanceCtrl', ['Room', '$uibModalInstance', '$cookies', CookiesInstanceCtrl]);
})();
