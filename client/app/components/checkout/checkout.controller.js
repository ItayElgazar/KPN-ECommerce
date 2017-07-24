class CheckoutController {
  constructor(ApiService) {
    "ngInject";

    this.apiService = ApiService;
    this.cartItems = this.apiService.getCartItems();
    this.purchase = {
      "purchaseStatus": 0,
      "fullName": null,
      "products": {},
      "totalPrice": 0
    };

  }

  $onInit() {
   

    this.purchase.totalPrice = this.cartItems.reduce((sum,value)=>{
         return sum + parseInt(value.price);
      },0);
  }

  payNow() {
    this.purchase.purchaseStatus = 1;
    this.apiService.clearCartItems();
  }


}

export default CheckoutController;
