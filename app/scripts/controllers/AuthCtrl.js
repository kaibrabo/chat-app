(function(){
    function AuthCtrl($uibModalInstance, $uibModal, $firebaseAuth, $cookies){

        this.signUpUser = function(){

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

                var auth = $firebaseAuth();

                auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                    function(firebaseUser) {

                        console.log("User: " + firebaseUser.uid);

                    }).catch(function(error) {

                        console.error("Authentication failed: ", error);
                    });

                var currentUser = $cookies.get('ChattaCurrentUser');

                console.log(currentUser);
            });

		};


    }

    angular
        .module('chatta')
        .controller('AuthCtrl', ['$uibModalInstance', '$uibModal', '$firebaseAuth', '$cookies', AuthCtrl]);
})();
