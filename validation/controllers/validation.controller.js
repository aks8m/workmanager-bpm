'use strict';

angular.module('workmanagerBPMApp').controller('ValidationController', function (Validation, $scope, $uibModal) {
    var vm = this;

    console.log(Validation.getData());

    vm.data = Validation.getData();

});