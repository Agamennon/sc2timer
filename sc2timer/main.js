
function mainCtrl($scope){


    console.log('---Main CTRL---');

    $scope.vars = {};

    $scope.vars.inject = {init:32,val:32};
    $scope.vars.other = {init:40,val:40};

    $scope.started = false;
    $scope.label = "Start";

    var myTimer;

    $scope.start = function(){
      if (!$scope.started){
          console.log("starting");
          $scope.label = "Stop";
          $scope.started = true;
          myTimer=setInterval(function(){
              tick()
          },1000);
      }else {
          console.log('stopping');
          $scope.label = "Start";
          $scope.started = false;
          $scope.stop();
      }

    };


    $scope.stop = function (){
        clearInterval(myTimer);
    };


    $scope.$watch('vars', function(newValue, oldValue, other){

      /* console.log(newValue);
       console.log(oldValue);
       console.log(other);*/
    },true);



    function tickInject(){


       $scope.$apply($scope.vars.inject.val -= 1);
       if ($scope.vars.inject.val < 1) {
         console.log("inject dude");

          $('#single').currentTime = 0;
          $('#single').get(0).play();
          $scope.vars.inject.val = $scope.vars.inject.init;
       }
    }


    function tick()    {
        tickInject();

    }




}