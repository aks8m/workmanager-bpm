'use strict';

angular.module('workmanagerBPMApp')
    .factory('Validation', function ($http, localStorageService) {

        var dataFactory = {};

        dataFactory.getData = function () {

            var returnData = [];

            localStorageService.get('validationData').forEach(function (item) {

                if (item.AssignmentID === '001') {
                    returnData.push(item);
                }

            });
            return returnData;
        };

        return dataFactory;

    });