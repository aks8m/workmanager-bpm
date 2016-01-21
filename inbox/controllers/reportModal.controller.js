'use strict';

angular.module('workmanagerBPMApp').controller('ReportModalController', function (selectedRow, $uibModalInstance) {

    var vm = this;

    vm.selectedRow = selectedRow;

    console.log(vm.selectedRow);


    vm.ok = function () {
        $uibModalInstance.dismiss('cancel');
    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };




});