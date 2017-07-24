class CartController {
  constructor($window, $state, $scope, $mdToast, ApiService) {
   "ngInject";
    
    this.originatorEv;
    this.currency = null;
    this.cartItems = 0;
    this.apiService = ApiService;
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.$scope = $scope;
    this.$window = $window;
  }

  $onInit() {
    this.cartItems = this.apiService.getCartItems();
    this.calculateTotalCartPrice();
    this.apiService.getGlobalCurrency().then((currency)=>{
      this.currency = currency;
    });
  }

  clearCartItems() {
    this.apiService.clearCartItems();
    this.cartItems = this.apiService.getCartItems();
  }

  calculateTotalCartPrice() {
  
    this.$scope.$watch(()=> { 
      return this.$window.localStorage.getItem('cartItems'); 
    },
    (newVal,oldVal) => {
      if(this.cartItems) {
         this.totalPrice = this.cartItems.reduce((sum,value)=>{
          return sum + parseInt(value.price);
        },0);
      }
    });
  }


  deleteItemFromCart(itemId) {
    if(this.cartItems) {
      let itemIndex = this.cartItems.map(item=> {return item.id;}).indexOf(itemId);
      this.cartItems.splice(itemIndex,1);
      this.apiService.updateCartItems(this.cartItems);
    }
  }

  openMenu($mdMenu, ev) {
      this.originatorEv = ev;
      $mdMenu.open(ev);
  }


}

export default CartController;
