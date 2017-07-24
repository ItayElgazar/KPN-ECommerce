describe('CheckoutCtrl', () => {
  let $componentController;
  let $q;
  let deferred;
  let $ctrl;
  let $state;
  let $rootScope;
  let ApiService;

  beforeEach(() => {
    angular.mock.module('app');
    angular.mock.inject((_$componentController_, _ApiService_, _$rootScope_, _$q_, _$state_) => {
        $componentController = _$componentController_;
        ApiService = _ApiService_;
        $rootScope = _$rootScope_;
        $state = _$state_;
        $q = _$q_;
    });

    $ctrl = $componentController('checkout');
  });

    describe('$onInit' , () => {
      it('should calculate total price of cart items',() => {
        $ctrl.cartItems = [
            {
                "id": 1,
                "name": "Samsung Galaxy S7 Sim Free",
                "image": "http://files-ptdpritol.netdna-ssl.com/system/photos/1148165/large/78920f627a06eb82911534a8763cf3ba.jpg",
                "price": 82,
                "manufacturer": "Samsung",
                "customizations": {
                    "storage": [32,64,128],
                    "color": ["black","white","gray","red"]
                }
            }
        ];
        $ctrl.$onInit();
        expect($ctrl.purchase.totalPrice).toEqual(82);
      });
    });


    describe('payNow', () => {
        it('should change purchase.purchaseStatus to 1', () => {
            $ctrl.payNow();
            expect($ctrl.purchase.purchaseStatus).toEqual(1);
        });

        it('should call the api service to clear the cart items', () => {
            spyOn(ApiService, "clearCartItems");
            $ctrl.payNow();
            $rootScope.$digest();
            expect(ApiService.clearCartItems).toHaveBeenCalled();
        });
    });


});