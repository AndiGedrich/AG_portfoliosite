angular.module('AndreaGedrichSite')
  .controller('MainController', MainController);

MainController.$inject = ['$timeout', '$mdDialog', '$mdMedia'];

function MainController($timeout, $mdDialog, $mdMedia){
  var vm = this;


    $timeout(function(){
      var hello = document.getElementById('hello');
      hello.innerHTML = "is it me you're looking for?";
    }, 3000);



  //   vm.status = ' ';
  //   vm.customFullScreen = $mdMedia('xs') || $mdMedia('sm');

  //   vm.showAdvanced = function(ev){
  //     var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullScreen;

  //     $mdDialog.show({
  //       controller: DialogController,
  //       templateUrl: 'dialog1.tmpl.html',
  //       parent: angular.element(document.body),
  //       targetEvent: ev,
  //       clickOutsideToClose:true,
  //       fullscreen: useFullScreen
  //     });

  //     vm.$watch(function(){
  //       return $mdMedia('xs') || $mdMedia('sm');
  //     }, function(wantsFullScreen){
  //       vm.customFullScreen = (wantsFullScreen === true);
  //     });

  // };


}


