'use strict';

angular.module('workmanagerBPMApp').controller('InboxController', function (User, Inbox) {
    var vm = this;

    vm.role = User.userRole;


    Inbox.get().then(function (response) {
        var foo = response.data.contentItem;
        console.log(foo);
    });
    vm.myData = Inbox.content;

    console.log(Inbox.content);

    /*
        vm.myData = [{
            name: "Andrew",
            role: "Cool Kid"
        }];
    */


});