'use strict';

angular.module('workmanagerBPMApp')
    .factory('Inbox', function($http) { 
    return {
        get:  function(){
            $http.get('scripts/data/terminologist_inbox.json'); // this will return a promise to controller
        }
}});