import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkoutComponent from './checkout.component';

let checkoutModule = angular.module('checkout', [
  uiRouter
])

.component('checkout', checkoutComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('checkout', {
      url: '/checkout',
      component: 'checkout'
    });
})

.name;

export default checkoutModule;
