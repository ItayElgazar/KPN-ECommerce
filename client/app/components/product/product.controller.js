class ProductController {
  constructor($stateParams, $state, $window, $scope, ApiService) {
    "ngInject";

    this.$scope = $scope;
    this.window = $window;
    this.product = $stateParams.product;
    this.selectedProduct = {};
    this.productId = $stateParams.productId;
    this.apiService = ApiService;
    this.storageError = false;
    this.colorError = false;
    this.state = $state;
  }

  $onInit() {
    this.getCurrency();
    if(this.product.length === 0) {
      this.getProductById(this.productId);
    } else if(!this.product.id) {
      this.state.go('catalog');
    }
     
  }

  getProductById(productId){
    this.apiService.getProducts().then((products)=>{
      if(products.length > 0) {
        this.product = products.filter(p=> {
          return p.id == productId
        })[0];
        this.product.color = null;
        this.product.storage = null;
      }

    });
  }

  getCurrency() {
    this.apiService.getGlobalCurrency().then((currency) => {
      this.currency = currency;
    });
  }

  chooseOption(type, opt) {
    this.product[type] = opt;
  }

  cart() {
    this.$scope.$broadcast('onBuy',this.product);
    if(this.product.color && this.product.storage) {
      console.log(this.product);
      this.apiService.addItemToCart(this.product);
      this.state.go('cart');
    }
  }

  

}

export default ProductController;
