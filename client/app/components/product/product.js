import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productComponent from './product.component';

let productModule = angular.module('product', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('product', {
      url: '/product/:productId',
      component: 'product',
      params: {
        product: [],
      }
    });
})

.component('product', productComponent)

.name;

export default productModule;
