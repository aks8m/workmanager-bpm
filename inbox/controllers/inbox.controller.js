'use strict';

angular.module('workmanagerBPMApp').controller('InboxController', function (Inbox, localStorageService, User, $scope) {
    var vm = this;
    var columnArray = ['number', 'assignment', 'domain', 'createdBy', 'dateAssigned', 'status', 'details'];
    var assignmentData = Inbox.getData(User.getUser().id);
    


    vm.gridOptions = {
        enableColumnMenus: false,
        enableRowSelection: true,
        enableSorting: false,
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
                name: 'Assignment #',
                field: 'number',
                enableCellEdit: false,
            },
            {
                name: 'Assignment',
                field: 'assignment',
            },
            {
                name: 'Domain',
                field: 'domain',
                enableCellEdit: false,
            },
            {
                name: 'Created By',
                field: 'createdBy',
                enableCellEdit: false,
            },
            {
                name: 'Date',
                field: 'dateAssigned',
                enableCellEdit: false
            },
            {
                name: 'Term #',
                field: 'termCount',
                enableCellEdit: false,
            },
            {
                name: 'Validated #',
                field: 'validatedCount',
                enableCellEdit: false,
            },
            {
                name: 'Status',
                field: 'status',
                enableCellEdit: false,
            },
            {
                name: 'Billable Hours',
                field: 'billableHours',
                enableCellEdit: false,
            },
            {
                name: 'Details',
                field: 'details',
                enableCellEdit: false,
            }
        ],
        data: assignmentData
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
    
    vm.validate = function(){};
    
    vm.edit = function(){};
    
    vm.export = function(){};
    
    vm.report = function(){};
    
    vm.refreshInbox = function(){};
    


});