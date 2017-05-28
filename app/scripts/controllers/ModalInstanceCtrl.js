(function() {

    function ModalInstanceCtrl(Room, $uibModalInstance) {

        this.submit = function () {

            Room.add(this.addChat.name);

            $uibModalInstance.close();
        };

        this.cancel = function () {

            $uibModalInstance.dismiss();
        };

    }

    angular
        .module('chatta')
        .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', ModalInstanceCtrl]);
})();
