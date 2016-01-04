'use strict';

angular.module('workmanagerBPMApp')
    .factory('Inbox', function ($http) {

        var dataFactory = {};

        dataFactory.getData = function () {
            return $http.get('scripts/data/terminologist_inbox.json');
        };

        return dataFactory;

    });