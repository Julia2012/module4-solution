(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuController', MainMenuController);

MainMenuController.$inject = ['items'];
function MainMenuController(items) {
  var mainList = this;
  mainList.items = items;
  
}

})();
