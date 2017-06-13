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

                var auth = $firebaseAuth();

                // auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                //     function(firebaseUser) {
                //
                //         console.log("User: " + firebaseUser.uid);
                //
                //     }).catch(function(error) {
                //
                //         console.error("Authentication failed: ", error);
                //     });

                firebase.auth().signInWithPopup(provider).then(function(result) {

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;

                    // The signed-in user info.
                    var user = result.user;
                    // ...
                }).catch(function(error) {

                    // Handle Errors here.
                    var errorCode = error.code;

                    var errorMessage = error.message;

                    // The email of the user's account used.
                    var email = error.email;

                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });

                    var currentUser = $cookies.get('ChattaCurrentUser');

                    console.log(currentUser);
                });

		};


    }

    angular
        .module('chatta')
        .controller('AuthCtrl', ['$uibModalInstance', '$uibModal', '$cookies', '$firebaseAuth', '$scope', AuthCtrl]);
})();
