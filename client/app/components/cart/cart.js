import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cartComponent from './cart.component';

let cartModule = angular.module('cart', [
  uiRouter
])

.component('cart', cartComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('cart', {
      url: '/cart',
      component: 'cart'
    });
})


.name;

export default cartModule;
