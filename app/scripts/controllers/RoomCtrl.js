(function(){
	function RoomCtrl($uibModal, Room, Message, $cookies, $firebaseAuth){

		var provider = new firebase.auth.GoogleAuthProvider();
		var auth = $firebaseAuth();

		this.title = "Messages";
		this.rooms = Room.all;
		this.currentRoom = null;
		this.messages = null;
		this.currentUser = $cookies.get('ChattaCurrentUser');
		this.newMessage = {
			content: null,
			roomId: null,
			sentAt: null,
			username: null
		}

		this.addChat = function(){

			$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'modal',
				size: 'sm'
			});
		};

		this.setCurrentRoom = function(room){
			this.currentRoom = room;
			this.messages = Message.getByRoomId(room.$id);
		};

		// send message from input
		this.sendMessage = function() {

			this.newMessage.roomId = this.currentRoom.$id;

            this.newMessage.username = this.currentUser;

			this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;

            Message.send(this.newMessage);

			document.getElementById("textarea").value = "";

		}

		this.signOut = function() {
            $cookies.remove('ChattaCurrentUser', this.currentUser);
			window.location.reload(true);
        }
	}

	angular
		.module('chatta')
		.controller('RoomCtrl', ['$uibModal', 'Room', 'Message', '$cookies', '$firebaseAuth', RoomCtrl]);

})();
