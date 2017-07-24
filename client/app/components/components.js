import angular from 'angular';
import header from './header/header';
import product from './product/product';
import catalog from './catalog/catalog';
import checkout from './checkout/checkout';
import cart from './cart/cart';
import picker from './picker/picker';

let componentModule = angular.module('app.components', [
  header,
  product,
  picker,
  catalog,
  checkout,
  cart
])

.name;

export default componentModule;
