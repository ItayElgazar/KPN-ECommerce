class HeaderController {
  constructor($state, $window, $scope, ApiService) {
    "ngInject";

    this.test = "asdas";
    this.$state = $state;
    this.apiService = ApiService;
    this.$scope = $scope;
    this.$window = $window;
  }
  
  $onInit() {
    this.cartItemsLength = this.getCartItemsLength();
    this.$scope.$watch(()=> { 
      return this.$window.localStorage.getItem('cartItems'); 
    },
    (newVal,oldVal) => {
      this.cartItemsLength = JSON.parse(newVal).length;
    })
  }
  

  

  getCartItemsLength() {
    return this.apiService.getCartItems().length;
  }
}

export default HeaderController;
