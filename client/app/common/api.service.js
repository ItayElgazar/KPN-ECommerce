import * as data from './products.json';

class ApiService {
  constructor($q, $window) {
    'ngInject';
    
    this.$q = $q;
    this.data = data;
    this.window = $window;
  }

  getProducts() {
    let deferred = this.$q.defer();
    deferred.resolve(this.data.products);
    return deferred.promise;
  }

  getGlobalCurrency() {
    let deferred = this.$q.defer();
    deferred.resolve(this.data.currency);
    return deferred.promise;
  }
  
  getCartItems() {
    return JSON.parse(this.window.localStorage.getItem('cartItems'));
  }

  addItemToCart(product) {
    if(!this.window.localStorage.getItem('cartItems'))
      this.window.localStorage.setItem('cartItems',JSON.stringify([]));

    let currentItems = this.getCartItems();
    
    currentItems.push(product);
    this.window.localStorage.setItem('cartItems',JSON.stringify(currentItems));

  }

  updateCartItems(cartItems) {
    this.window.localStorage.setItem('cartItems',JSON.stringify(cartItems));
  }

  clearCartItems() {
    this.window.localStorage.setItem('cartItems',JSON.stringify([]));
  }

}

export default ApiService;
