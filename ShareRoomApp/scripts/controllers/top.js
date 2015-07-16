'use strict';

app.controller('TopController', function($scope, $location, toaster, Auth) {

	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

  $scope.logout = function() {    
    Auth.logout();    
    toaster.pop('success', "Logged out successfully");
    $location.path('/');
  };
	
});