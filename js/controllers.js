'use strict';

/* Controllers */

angular.module('wradio.controllers', []).
 controller('ChatCtrl', [
  	'$scope', 
  	'angularFire',
  	function($scope, angularFire ) {
  		var url = 'https://wradio.firebaseio.com/chat';
  		var promise = angularFire(url, $scope, 'chat', {messages: []});

  		$scope.username = 'Guest' + Math.floor(Math.random()*101);

 

  	// callback
  	// promise has to do with the asyncronizity of firebase
	  	promise.then(function(){
	  
	  		$scope.AddMsg = function(){
	  		$scope.chat.messages.push({text: $scope.msgInput, from: $scope.username})
	  		}
  		});
   }

 ]);

 