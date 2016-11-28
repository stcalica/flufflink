(function(){
	
	'use strict'; 

	angular.module('fluff').config(Config);

	Config.$inject = ['$routeProvider'];

	function Config($routeProvider){
			
		$routeProvider.when('/', {
			templateUrl: 'views/index.client.view.html',
			controller: 'FormController',
			controllerAs: 'form'
		});

	}		

})();
