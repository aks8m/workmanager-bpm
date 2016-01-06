'use strict';

angular.module('workmanagerBPMApp').controller('InboxController', function (Inbox, localStorageService, User) {
    var vm = this;


    vm.gridOptions = {
        enableSorting: true,
        columnDefs: [
            {
                name: 'Assignment Number',
                field: 'number',
                enableCellEdit: false
            },
            {
                name: 'Assignment',
                field: 'assignment',
                enableCellEdit: false
            },
            {
                name: 'Domain',
                field: 'domain',
                enableCellEdit: false
            },
            {
                name: 'Created By',
                field: 'createdBy',
                enableCellEdit: false
            },
            {
                name: 'Date Assigned',
                field: 'dateAssigned',
                enableCellEdit: false
            },
            {
                name: 'Number of Terms',
                field: 'termCount',
                enableCellEdit: false
            },
            {
                name: 'Terms Validated',
                field: 'validatedCount',
                enableCellEdit: false
            },
            {
                name: 'Status',
                field: 'status',
                enableCellEdit: false
            },
            {
                name: 'Billable Hours',
                field: 'billableHours',
                enableCellEdit: false
            },
            {
                name: 'Details',
                field: 'details',
                enableCellEdit: false
            }
        ],
        data: Inbox.getData(User.getUser().id)
    };


});