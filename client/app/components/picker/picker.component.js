import template from './picker.html';
import controller from './picker.controller';
import './picker.scss';

let pickerComponent = {
  bindings: {
    type: '<',
    options: '<',
    onselect: '&',
  },
  template,
  controller
};

export default pickerComponent;
