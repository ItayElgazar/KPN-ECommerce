import angular from 'angular';
import uiRouter from 'angular-ui-router';
import headerComponent from './header.component';

let pickerModule = angular.module('header', [
  uiRouter
])

.component('header', headerComponent)

.name;

export default pickerModule;
