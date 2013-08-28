'use strict';

/* Controllers */

angular.module('wradio.controllers', []).
  controller('ChatCtrl', [
  	'$scope', 
  	'angularFire',
  	function($scope, angularFire ) {
  		var url = 'https://wradio.firebaseio.com/chat';
  		var promise = angularFire(url, $scope, 'chat', {messages: []});

  // 	$scope.msgInput = "Type here";
  // 	$scope.name = "Tom";
  // };

  	// callback
  	promise.then(function(){
  
  		$scope.AddMsg = function(){
  		$scope.chat.messages.push({text: $scope.msgInput})
  		}

		
  	});
  }

]);

 