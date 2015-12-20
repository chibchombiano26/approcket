/*global angular*/
angular.module('cards').
directive('card', function(){
 
 	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "directives/card.html";
	directive.controller = "cardController";
	
	directive.link = function (scope, iElement, attrs) {
		
	}
	
	directive.scope = {
		showImage : '=',
		card: '=',
		isGuarding : '=',
		inGame: '='
	}
	
	return directive;
})

