(function(){
    function Message($firebaseArray) {

        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.all = messages;

        // gets roomId form $firebaseArray
        Message.getByRoomId = function(roomId) {

            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        Message.send = function(newMessage){

            // Send method logic
            messages.$add(newMessage);
        }

        // returns Message obj.
        return Message;
    }

    angular
        .module('chatta')
        .factory('Message', ['$firebaseArray', Message]);
})();
