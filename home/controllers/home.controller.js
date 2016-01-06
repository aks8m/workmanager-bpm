'use strict';

angular.module('workmanagerBPMApp')
    .controller('HomeController', function (DataInit) {
        var vm = this;

        //Call Init Data Services for All data needed to demo BPM SPA
        DataInit.loadUsers();
        DataInit.loadTerminologistInbox();
        DataInit.loadAllAssignments();
    

    });