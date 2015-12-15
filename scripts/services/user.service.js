'use strict';

angular.module('workmanagerBPMApp')
    .factory('User', function (localStorageService) {

        return localStorageService.get('userObject');

    });