describe('PickerCtrl', () => {
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

    $ctrl = $componentController('picker');
  });

    describe('$onInit' , () => {
        
        it('should set colorError and storageError to false', () => {
            $ctrl.$onInit();
            expect($ctrl.colorError).toBeFalsy();
            expect($ctrl.storageError).toBeFalsy();
        });

    });

});



