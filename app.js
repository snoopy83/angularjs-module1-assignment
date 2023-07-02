(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {

  $scope.menu = "";
  $scope.message = "";
  $scope.check = function(){
    if(!$scope.menu){
      $scope.message="Please enter data first";
    }else{
      const items = $scope.menu.split(",");
      items.length>3?$scope.message = "Too much!":$scope.message = "Enjoy!";
    }
  }
}

})();
