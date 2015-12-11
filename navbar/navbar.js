angular.module('workmanagerBPMApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('site', {
            'abstract': true,
            views: {
                'navbar@':{
                        templateUrl: 'navbar/navbar.html',
                        controller: 'NavbarController',
                        controllerAs: 'navbarController'
                        
                }
            }
        })    
}]);