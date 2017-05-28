(function(){
	function RoomCtrl($uibModal, Room){

		this.title = "Messages";

		this.rooms = Room.all;

		this.addChat = function(){

			$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'modal',
				size: 'sm'
			});
		};

	}

	angular
		.module('chatta')
		.controller('RoomCtrl', ['$uibModal', 'Room', RoomCtrl]);

})();
