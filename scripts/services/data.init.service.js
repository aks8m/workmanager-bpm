'use strict';

angular.module('workmanagerBPMApp')
    .factory('DataInit', function ($http, localStorageService) {

        var dataFactory = {};

        dataFactory.loadUsers = function () {
            $http.get('scripts/data/users.json')
                .success(function (data) {
                    localStorageService.set('users', data);
                });

        };

        dataFactory.loadTerminologistInbox = function () {
            $http.get('scripts/data/assignments.json')
                .success(function (data) {
                    localStorageService.set('assignments', data);
                });

        };

        dataFactory.loadAllAssignments = function () {
            $http.get('scripts/data/validation_data.json')
                .success(function (data) {
                    localStorageService.set('validationData', data);
                });

        };

        return dataFactory;

    });