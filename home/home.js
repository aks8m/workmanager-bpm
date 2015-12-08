angular.module('workmanagerBPMApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: '/home/home.html',
            controller: 'HomeController'
        }) 
}]);