angular.module('workmanagerBPMApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('validation', {
                parent: 'site',
                url: '/validation',
                views: {
                    'content@': {
                        templateUrl: 'validation/validation.html',
                        controller: 'ValidationController',
                        controllerAs: 'validationController'
                    }
                }
            })

}]);