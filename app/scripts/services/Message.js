(function(){
    function Message($firebaseArray) {

        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {

            var roomIdRef = ref.orderByChild('roomId').equalTo(roomId);

            return $firebaseArray(roomIdRef);

        };

        return Message;
    }

    angular
        .module('chatta')
        .factory('Message', ['$firebaseArray', Message]);
})();
