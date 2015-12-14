'use strict';

angular.module('workmanagerBPMApp')
    .controller('ModalController', function ($uibModalInstance) {

        var vm = this;
        var role;

        vm.name = '';
        vm.ddTitle = "Select A Role ";

        vm.roleSelected = function (selection) {

            role = selection;
            vm.ddTitle = role;

        };


        vm.ok = function () {
            console.log(vm.name + ' selected -> ' + role);
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            console.log('cancel');
            $uibModalInstance.dismiss();
        };

    });