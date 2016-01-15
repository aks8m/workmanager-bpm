angular.module('workmanagerBPMApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('inbox',{
            parent: 'site',
            url: '/inbox',
            views: {
                    'content@':{
                        templateUrl: 'inbox/inbox.html',
                        controller: 'InboxController',
                        controllerAs: 'inboxController'
                    }
                }})
    
}]);