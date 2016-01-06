'use strict';

angular.module('workmanagerBPMApp')
    .controller('NavbarController', function ($uibModal, localStorageService, User) {

        var vm = this;
    
        vm.role = User.getUser().userRole;

    });