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
	  	promise.then(function(){ 
	  		$scope.AddMsg = function(){
	  		$scope.chat.messages.push({
	  			text: $scope.msgInput, 
	  			from: $scope.username , 
	  			date: new Date().toLocaleString()
	  			});
	  		$scope.msgInput = "";
	  		}

	  		// $scope.AddEmo = function(){
  			// $scope.msgInput.push({ img: $scope.emoticon })
  			// }

  		});

    }
 ]);

 

 

   





 