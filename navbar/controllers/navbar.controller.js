'use strict';

angular.module('workmanagerBPMApp')
    .controller('NavbarController', function ($uibModal, localStorageService) {

        var vm = this;

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modal/modal.html',
            controller: 'ModalController',
            controllerAs: 'modalController'
        });

        modalInstance.result.then(function (userObject) {

            console.log(userObject);
            localStorageService.set('userObject', userObject);

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    });