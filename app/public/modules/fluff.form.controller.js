(function(){

	'use strict';

	angular.module('fluff').controller('FormController', FormController);


	FormController.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$http'];


	function FormController( $scope, $rootScope, $routeParams, $window, $http){
		$scope.fluff = {}; // form data in json object(?) to be posted to mongo database
		$scope.submitform = function(){
			$scope.fluff.link = this.link;
			$scope.fluff.link = this.description;
			console.log('form-data', $scope.fluff);
			$http({
				method: 'POST',
				url: 'http://fluff.link/share',
				data: $scope.fluff,
				headers: {'Content-type': 'application/x-www-form-urlenconded'}
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
