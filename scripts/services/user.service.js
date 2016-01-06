'use striict';

angular.module('workmanagerBPMApp')
    .factory('User', function(localStorageService){
    
    var datafactory = {};
    
    datafactory.getUser = function() {
        
        return localStorageService.get('users');
    }
    
    return datafactory;
    
});