'use strict';

angular.module('workmanagerBPMApp')
    .controller('ModalController', function ($uibModalInstance) {

        var vm = this;
        var role;
        var userNameAndRole = {};

        vm.name = '';
        vm.ddTitle = "Select A Role ";


        vm.roleSelected = function (selection) {

            role = selection;
            vm.ddTitle = role;

        };

        vm.ok = function () {

            userNameAndRole = {
                userName: vm.name,
                userRole: role
            };
            $uibModalInstance.close(userNameAndRole);

        };

        vm.cancel = function () {
            console.log('cancel');
            $uibModalInstance.dismiss();
        };

    });