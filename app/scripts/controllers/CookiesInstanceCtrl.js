(function() {
    function CookiesInstanceCtrl(Room, $uibModalInstance, $cookies, $uibModal, $firebaseAuth) {

        var provider = new firebase.auth.GoogleAuthProvider();

        this.createUsername = function() {

            // disables signUp if input is empty
            if (!this.username || this.username === ''){

                return;
            }

            // if a username is entered...
            // assigns the cookies current user w/ this.username
            $cookies.put('ChattaCurrentUser', this.username);

            $uibModalInstance.close()

            window.location.reload(true);

        }

        this.signin = function(){

            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(result.credential.accessToken, "token");
                console.log(result.user, "user");
                console.log(user.displayName, "username");

                this.username = user.displayName;

                $cookies.put('ChattaCurrentUser', this.username);

                $uibModalInstance.close()

                window.location.reload(true);

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

        };

        // this.signOut = function(){
        //
        //     firebase.auth().signOut().then(function() {
        //         // Sign-out successful.
        //     }).catch(function(error) {
        //         // An error happened.
        //     });
        // };


    }

    angular
        .module('chatta')
        .controller('CookiesInstanceCtrl', ['Room', '$uibModalInstance', '$cookies', '$uibModal', '$firebaseAuth', CookiesInstanceCtrl]);
})();
