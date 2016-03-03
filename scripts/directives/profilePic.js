angular.module('chattyApp')
.directive('profilePicture', function() {
  return {
    restrict: 'E',
    template: '<img src="{{imageUrl}}"></img>',
    scope: {
      imageObj: '=',
      user: '='
    },
    controller: function($scope) {
    $scope.$watch('user', function() {
        if ($scope.user) {
          $scope.imageUrl = $scope.imageObj.url;
          console.log($scope.imageObj);
        } else {
          $scope.imageUrl = 'https://redeeminggod.com/wp-content/uploads/2011/03/who_are_you.gif'
        }
      })
    }
  }
})
