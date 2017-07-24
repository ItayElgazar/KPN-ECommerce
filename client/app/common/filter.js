import angular from 'angular';
import CurrencyFilter from './currency.filter';

let currencyModule = angular.module('currency', [
]).filter("currency",()=> CurrencyFilter.filter)

.name;

export default currencyModule;
