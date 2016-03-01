angular.module('AndreaGedrichSite')
  .controller('DialogController', DialogController);

DialogController.$inject = ['$mdDialog', '$mdMedia'];

function DialogController($mdDialog, $mdMedia){
  var vm = this;

  vm.hide = function(){
    $mdDialog.hide();
  };
  vm.cancel = function(){
    $mdDialog.cancel();
  };
  vm.answer = function(answer){
    $mdDialog.hide(answer);
  };
  }

}
