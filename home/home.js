angular.module('workmanagerBPMApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home',{
            parent: 'site',
            url: '/',
            views: {
                    'content@':{
                        templateUrl: 'home/home.html',
                        controller: 'HomeController'
                    }
                }
        })
    
}]);