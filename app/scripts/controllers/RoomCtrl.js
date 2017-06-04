(function(){
	function RoomCtrl($uibModal, Room, Message, $cookies){

		this.title = "Messages";

		this.rooms = Room.all;

		this.currentRoom = null;

		this.messages = null;

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

	}

	angular
		.module('chatta')
		.controller('RoomCtrl', ['$uibModal', 'Room', 'Message', '$cookies', RoomCtrl]);

})();
