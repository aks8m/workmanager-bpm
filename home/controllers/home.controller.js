'use strict';

angular.module('workmanagerBPMApp')
    .controller('HomeController', function ($uibModal) {
        var vm = this;


        $uibModal.open({
            animation: true,
            templateUrl: 'modal/modal.html',
            controller: 'ModalController',
            controllerAs: 'modalController'
        });
    
    });