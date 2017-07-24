class CatalogController {
  constructor($state, $mdDialog, $timeout, ApiService) {
    'ngInject';

    this.$state = $state;
    this.ApiService = ApiService;
    this.$timeout = $timeout;
    this.products = [];
    this.loading = true;
  }


  $onInit() {
    this.getProducts();
    this.getCurrency();
    this.$timeout(()=>{
          this.loading = false;
      },1000);
  }

  getProducts() {
    this.ApiService.getProducts().then((products) => {
      this.products = products;
    }).catch(e => toastservice(e));
  }

  getCurrency() {
    this.ApiService.getGlobalCurrency().then((currency) => {
      this.currency = currency;
    });
  }

  goToProduct(product) {
    console.log(product);
    this.$state.go('product', {
      //product.name.toLowerCase().replace(/ /g,'-'),
      productId: product.id,
      product,
    });
  }

  selectProduct(product) {
    this.$state.go('checkout', {
      product,
    });
  }
}

export default CatalogController;
