(function(){

	'use strict';

	angular.module('fluff').controller('FormController', FormController);


	FormController.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$http'];


	function FormController( $scope, $rootScope, $routeParams, $window, $http){
		var form = this;
		console.log('out submitform', form);

		//$scope.fluff = {}; // form data in json object(?) to be posted to mongo database

		$scope.submitform = function(){
			console.log('in submitform', form);
			var fluff = {};
			fluff.title = form.title;
			fluff.link = form.link;
			fluff.description = form.desc;
			fluff.author = form.author;
			fluff.image = form.image;


			$http.post('http://fluff.link/share',
             {
							 	title: fluff.title,
                 link: fluff.link,
                 description: fluff.description,
								 author: fluff.author,
								 image: fluff.image
             }).success(function(data){
							 	console.log('Call to API was successful');
								if(data.errors){
									console.log('Data Errors');
									//show errors  -  part of the response in the REST API have to make this portion up myself
								} else {
									console.log('returned share id', data);
									var fluff = 'fluff/link/'+ data;
									alert('http://fluff.link/#!/' + fluff);
									$window.location.href = fluff;
								}
			});

		}


	}

})();
