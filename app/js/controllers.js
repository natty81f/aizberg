'use strict';

/* Controllers */

angular.module('wradio.controllers', []).
 controller('ChatCtrl', [
  	'$scope', 
    '$timeout',
  	'angularFire',
  	function($scope, $timeout, angularFire ) {
  		var url = 'https://wradio.firebaseio.com/chat';
  		var promise = angularFire(url, $scope, 'chat', {messages: []});

  		$scope.username = 'Guest' + Math.floor(Math.random()*101);

  	  // callback
	  	promise.then(function() { 
	  		$scope.AddMsg = function() {
  	  		$scope.chat.messages.push({
  	  			text: $scope.msgInput, 
  	  			from: $scope.username , 
  	  			date: new Date().toLocaleString()});
          $scope.msgInput = "";	
	  		}
  		});
    }
 ])

// Enables auto-scroll for messages in chat window //
.directive('autoScroll', function($timeout) {
  return function(scope, elements, attrs) {
    scope.$watch("chat.messages.length", function() {
      $timeout(function() {
        elements[0].scrollTop = elements[0].scrollHeight
      });
    });
  }
});





   





 