(function(){
	function RoomCtrl(Room){
		this.title = "Messages";

		this.rooms = Room.all;
		console.log(this.rooms);
	}

	angular
		.module('chatta')
		.controller('RoomCtrl', ['Room', RoomCtrl]);
})();
