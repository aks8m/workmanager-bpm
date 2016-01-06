'use strict';

angular.module('workmanagerBPMApp')
    .factory('Inbox', function ($http, localStorageService) {

        var dataFactory = {};

        dataFactory.getData = function (userID) {

            var returnData = [];

            localStorageService.get('assignments').forEach(function (item) {

                if (item.userID === 'u1') {
                    returnData.push(item);
                }

            });
            return returnData;
        };

        return dataFactory;

    });