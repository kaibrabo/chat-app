(function(){
	function RoomCtrl(Room){
		
		this.title = "Messages";
		this.rooms = Room.all;
	}

	angular
		.module('chatta')
		.controller('RoomCtrl', ['Room', RoomCtrl]);
})();
