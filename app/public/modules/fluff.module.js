(function(){
	
	'use strict';
	
	var dependencies = ['ngRoute']; 

	angular.module('fluff', dependencies).config(Config);

	Config.$inject = [ '$locationProvider'];

	function Config($locationProvider){
		$locationProvider.hashPrefix('!');
	} 

	if(window.location.hash == '#_=_'){
		window.location.hash = '#!';
	} 

	//bootstrap angular

	angular.element(document).ready(function(){

		angular.bootstrap(document, ['fluff']);		

	});


})();
