'use strict';

angular.module('workmanagerBPMApp')
    .controller('NavbarController', function ($uibModal) {

            var vm = this;

            vm.role = 'Role';


            vm.openRoleModal = function () {

                $uibModal.open({
                        animation: true,
                        templateUrl: 'modal/modal.html',
                        controller: 'ModalController',
                        controllerAs: 'modalController'
                })};

            });