describe('ProductCtrl', () => {
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

    $ctrl = $componentController('product');
  });

    describe('$onInit' , () => {
        beforeEach(() => {
            deferred = $q.defer();
            // Use a Jasmine Spy to return the deferred promise
           
        });
  
      it('should call apiService to get global currency', ()=> {
        spyOn(ApiService, 'getGlobalCurrency').and.returnValue(deferred.promise);
        $ctrl.product = [0];
        const data = {};
        deferred.resolve(data);
        $ctrl.$onInit();
        $rootScope.$digest();
        expect($ctrl.currency).toEqual(data);
      });
    });




});



