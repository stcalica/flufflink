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
			fluff.link = form.link;
			fluff.description = form.desc;


			console.log('form-data', fluff);
			$http({
				method: 'POST',
				url: 'http://fluff.link/share',
				data: { 'data': fluff },
				headers: {'Content-type': 'application/json'}
			}).success(function(data){
				console.log('Call to API was successful');
				if(data.errors){
					console.log('Data Errors');
					console.log('error:', $data.errors.name);
					//show errors  -  part of the response in the REST API have to make this portion up myself
					$scope.errorName = $data.errors.name;

				} else {
					console.log('returned share id', data);
					var fluff = 'fluff/link/'+ data;
					$window.location.href = fluff;
				}

			});

		}


	}

})();
