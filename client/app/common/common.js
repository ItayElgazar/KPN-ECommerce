import angular from 'angular';
import ApiService from './api.service';
import currency from './filter';

let commonModule = angular.module('app.common', [
    currency
])
.service('ApiService', ApiService)
  
.name;

export default commonModule;
