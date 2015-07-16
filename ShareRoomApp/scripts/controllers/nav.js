'use strict';

app.controller('NavController', function($scope, $location, toaster, Auth) {

	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

  $scope.logout = function() {    
    Auth.logout();    
    toaster.pop('success', "ログアウトしました");
    $location.path('/top');
  };
	
});