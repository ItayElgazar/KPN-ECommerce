describe('CartCtrl', () => {
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

    $ctrl = $componentController('cart');
  });

    describe('$onInit' , () => {
        beforeEach(() => {
            deferred = $q.defer();
            // Use a Jasmine Spy to return the deferred promise
            spyOn(ApiService, 'getGlobalCurrency').and.returnValue(deferred.promise);
        });

      it('should call apiService to get the cart items', () => {
        spyOn(ApiService, 'getCartItems');
        $ctrl.$onInit();
        expect(ApiService.getCartItems).toHaveBeenCalled();
      });

      it('should call to calculateTotalCartPrice', ()=>{
        spyOn($ctrl, 'calculateTotalCartPrice');
        $ctrl.$onInit();
        expect($ctrl.calculateTotalCartPrice).toHaveBeenCalled();
      });

      it('should call apiService to get global currency', ()=> {
        const data = {};
        deferred.resolve(data);
        $ctrl.$onInit();
        $rootScope.$digest();
        expect($ctrl.currency).toEqual(data);
      });
    });

    describe('clearCartItems', () => {
        it('should call the service to clear the cart items', ()=> {
            spyOn(ApiService, 'clearCartItems');
            $ctrl.clearCartItems();
            expect(ApiService.clearCartItems).toHaveBeenCalled();
        });
    });

    describe('calculateTotalCartPrice', () => {
        it('should calculate cart total price', () => {
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

            $ctrl.calculateTotalCartPrice();
            $rootScope.$digest();
            
            expect($ctrl.totalPrice).toEqual($ctrl.cartItems[0].price);
        });
    });

    describe('deleteItemFromCart', () => {
        it('should delete cart item by index', () => {
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
            $ctrl.deleteItemFromCart(1);
            expect($ctrl.cartItems.length).toEqual(0);
        });
    });


});



