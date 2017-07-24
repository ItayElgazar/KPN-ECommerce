import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pickerComponent from './picker.component';

let pickerModule = angular.module('picker', [
  uiRouter
])

.component('picker', pickerComponent)

.name;

export default pickerModule;
