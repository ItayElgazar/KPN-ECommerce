describe('CatalogCtrl', () => {
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

    $ctrl = $componentController('catalog');
  });

    describe('$onInit' , () => {
      it('should getProducts to get the products',() => {
        spyOn($ctrl, 'getProducts');
        $ctrl.$onInit();
        expect($ctrl.getProducts).toHaveBeenCalled();
      });
    });

    describe('getProducts' , () => {
      beforeEach(() => {
        deferred = $q.defer();
        // Use a Jasmine Spy to return the deferred promise
        spyOn(ApiService, 'getProducts').and.returnValue(deferred.promise);

      });

      it('should check equality of data to products',()=>{
        const data = {};
        deferred.resolve(data);
        $ctrl.getProducts();
        $rootScope.$digest();
        expect($ctrl.products).toEqual(data);
      });
    });

    describe('goToProduct', () => {
      it('should call state function',() => {
        spyOn($state, 'go');
        $ctrl.goToProduct({productId: 5});
        expect($state.go).toHaveBeenCalled();
      });
    });

    describe('selectProduct', () => {
      it('should call state function',() => {
        spyOn($state, 'go');
        $ctrl.selectProduct({productId: 5});
        expect($state.go).toHaveBeenCalled();
      });
    });

});

