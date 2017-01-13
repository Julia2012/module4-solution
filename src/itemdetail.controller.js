(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['menuItems','$stateParams'];
function ItemDetailController(menuItems, $stateParams) {
  var itemDetail = this;
  itemDetail.short_name = $stateParams.short_name;
  itemDetail.menuItems = menuItems;
}

})();
