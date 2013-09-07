'use strict';

/* Controllers */

angular.module('wradio.controllers', []).
 controller('ChatCtrl', [
  	'$scope', 
    '$timeout',
    '$location',
  	'angularFire',
  	function($scope, $timeout, $location, angularFire ) {
  		var url = 'https://wradio.firebaseio.com/chat';
  		var promise = angularFire(url, $scope, 'chat', {messages: []});

  		$scope.username = 'Guest' + Math.floor(Math.random()*101);

      // Shows playlists only when path = home.html
      var path = $location.path();
      console.log(path);
      $scope.showPlaylist = true;
      if (path == '/home'){

      }

  	  // callback
	  	promise.then(function() { 
         $scope.showPlaylist = true;
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





   





 