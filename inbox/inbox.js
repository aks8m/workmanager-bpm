angular.module('workmanagerBPMApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('inbox', {
            url:'/inbox',
            templateUrl: '/inbox/inbox.html',
            controller: 'InboxController'
        }) 
}]);