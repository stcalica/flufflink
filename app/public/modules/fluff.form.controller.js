(function(){

	'use strict';

	angular.module('fluff').controller('FormController', FormController);


	FormController.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$http'];


	function FormController( $scope, $rootScope, $routeParams, $window, $http){

		console.log('Inside Form Controller');

		$scope.fluff = {}; // form data in json object(?) to be posted to mongo database


		$scope.submitform = function(){
			console.log('form-data', $scope.fluff);
			$http({
				method: 'POST',
				url: 'http://127.0.0.1:9090/share',
				data: $scope.fluff,
				headers: {'Content-type': 'application/x-www-form-urlenconded'}
			}).success(function(data){

				if(data.errors){

					//show errors  -  part of the response in the REST API have to make this portion up myself
					$scope.errorName = $data.errors.name;

				} else {
					console.log('returned share', data);
					$scope.message = data.message;

				}

			});

		}


	}

})();
