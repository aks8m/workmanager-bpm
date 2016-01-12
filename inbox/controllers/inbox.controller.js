'use strict';

angular.module('workmanagerBPMApp').controller('InboxController', function (Inbox, localStorageService, User, $scope) {
    var vm = this;
    var columnArray = ['number', 'assignment', 'domain', 'createdBy', 'dateAssigned', 'status', 'details'];


    vm.gridOptions = {
        enableRowSelection: true,
        enableSorting: true,
        noUnselect: true,
        showGridFooter: false,
        multiSelect: false,
        enableFullRowSelection: true,
        enableRowHeaderSelection: false,
        onRegisterApi: function (gridApi) {
            vm.gridApi = gridApi;
            vm.gridApi.grid.registerRowsProcessor(vm.singleFilter, 200);
            vm.gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                vm.selectedAssignment = row.entity;
            });
        },
        columnDefs: [
            {
                name: 'Assignment Number',
                field: 'number',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Assignment',
                field: 'assignment',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Domain',
                field: 'domain',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Created By',
                field: 'createdBy',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Date',
                field: 'dateAssigned',
                enableCellEdit: false
            },
            {
                name: 'Number of Terms',
                field: 'termCount',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Terms Validated',
                field: 'validatedCount',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Status',
                field: 'status',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Billable Hours',
                field: 'billableHours',
                enableCellEdit: false,
                width: "**"
            },
            {
                name: 'Details',
                field: 'details',
                enableCellEdit: false,
                width: "**"
            }
        ],
        data: Inbox.getData(User.getUser().id)
    };

    vm.singleFilter = function (renderableRows) {
        var matcher = new RegExp(vm.searchFilterValue);
        renderableRows.forEach(function (row) {
            var match = false;
            columnArray.forEach(function (field) {
                if (String(row.entity[field]).match(matcher)) {
                    match = true;
                }
            });
            if (!match) {
                row.visible = false;
            }
        });
        return renderableRows;
    };


    vm.filter = function () {
        vm.gridApi.grid.refresh();
    };

    vm.resetFilter = function () {
        vm.searchFilterValue = "";
        vm.filter();

    };



});