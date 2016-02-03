'use strict';

angular.module('workmanagerBPMApp').controller('InboxController', function (Inbox, localStorageService, User, $scope, $uibModal) {
    var vm = this;
    var columnArray = ['number', 'assignment', 'domain', 'createdBy', 'dateAssigned', 'status', 'details'];
    var assignmentData = Inbox.getData(User.getUser().id);
    var selectedAssignment = null;
    vm.isDisabled = false;
    vm.isRowSelected = false;


    vm.gridOptions = {
        enableColumnMenus: false,
        enableRowSelection: true,
        enableSorting: false,
        noUnselect: true,
        showGridFooter: false,
        multiSelect: false,
        enableFullRowSelection: true,
        enableRowHeaderSelection: false,
        xporterPdfDefaultStyle: {
            fontSize: 9
        },
        exporterPdfTableStyle: {
            margin: [30, 30, 30, 30]
        },
        exporterPdfTableHeaderStyle: {
            fontSize: 10,
            bold: true,
            italics: true,
            color: 'red'
        },
        exporterPdfOrientation: 'landscape',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        onRegisterApi: function (gridApi) {
            vm.gridApi = gridApi;
            vm.gridApi.grid.registerRowsProcessor(vm.singleFilter, 200);
            vm.gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                selectedAssignment = row.entity;
                vm.isRowSelected = true;
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


    vm.validate = function () {};

    vm.edit = function () {
        vm.isDisabled = !vm.isDisabled;
    };

    vm.export = function () {
        vm.gridApi.exporter.pdfExport('all', 'all');
    };

    vm.report = function () {


        console.log(!selectedAssignment === null);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/inbox/views/report.modal.html',
            controller: 'ReportModalController',
            controllerAs: 'reportModalController',
            size: 'lg',
            resolve: {
                selectedRow: selectedAssignment
            }
        });


    };

    vm.refreshInbox = function () {

        assignmentData = Inbox.getData(User.getUser().id);
        vm.gridApi.grid.refresh();
    }


});