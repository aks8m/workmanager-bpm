'use strict';

angular.module('workmanagerBPMApp').controller('InboxController', function (User, Inbox) {
    var vm = this;

    vm.role = User.userRole;


    Inbox.getData()
        .success(function (data) {
            vm.myData = data;
        })
        .error(function (error) {
            console.log('Unable to load inbox data: ' + error.message);
        });
    
});