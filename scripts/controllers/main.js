'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });
    $scope.profilePic = { url: 'http://www.banhamzoo.co.uk/Files/Images/Animals/GGOwl.jpg'};


    $scope.addMessage = function ( message, username ) {
      if (message) {
        messageService.addMessage(message, username ).then(function ( response ) {
          $scope.messages = response.data;
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
