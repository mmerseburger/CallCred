angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('identificacao', {
		url: '/',
      	template: '<identificacao></identificacao>'
    })
    .state('residencial', {
		url: '/',
      	template: '<residencial></residencial>'
    })
    .state('profissional', {
		url: '/',
      	template: '<profissional></profissional>'
    })
    .state('fatura', {
		url: '/',
      	template: '<fatura></fatura>'
    })
    .state('documentos', {
		url: '/',
      	template: '<documentos></documentos>'
    })
    .state('confirmacao', {
		url: '/',
      	template: '<confirmacao></confirmacao>'
    })
    ;
}


// ,
//     {
//     	url: '/residencial',
//       	template: '<residencial></residencial>'
//     }