(function(){
    function AuthCtrl($uibModalInstance, $uibModal, $cookies, $scope, $firebaseAuth){

        var provider = new firebase.auth.GoogleAuthProvider();

        gapi.load('auth2', function() {
            gapi.auth2.init();
        });

        $scope.signUpUser = function(){

			var modalInstance = $uibModal.open({
				templateUrl: '/templates/login.html',
				controller: 'AuthCtrl',
				controllerAs: 'auth',
				size: 'sm'
			});

            modalInstance.result.then(function(user) {

                this.username = user.username;
                this.email = user.email;
                this.password = user.password;

                $cookies.put('ChattaCurrentUser', this.username);

		});


    }

    angular
        .module('chatta')
        .controller('AuthCtrl', ['$uibModalInstance', '$uibModal', '$cookies', '$firebaseAuth', '$scope', AuthCtrl]);
})();
