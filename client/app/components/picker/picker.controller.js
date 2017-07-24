class PickerController {
  constructor($scope) {
    "ngInject";

    this.$scope = $scope;
    this.option = null;
    this.storageError = false;
    this.colorError = false;
  }

  $onInit() {
    this.$scope.$on('onBuy',(event,data)=>{
      this.colorError = false;
      this.storageError = false;
      if(!data.color)
        this.colorError = true;
      if(!data.storage)
        this.storageError = true;
    });
  }
}

export default PickerController;
