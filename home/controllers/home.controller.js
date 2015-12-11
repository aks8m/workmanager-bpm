'use strict';

angular.module('workmanagerBPMApp')
    .controller('HomeController', function ($scope) {
    var vm = this;
    
    vm.roleSelected = function(role){
      
        $scope.role = role;
        console.log($scope.role);
        
    };

});