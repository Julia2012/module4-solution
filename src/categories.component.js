(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});
console.log(window.location.hostname);

})();
  
