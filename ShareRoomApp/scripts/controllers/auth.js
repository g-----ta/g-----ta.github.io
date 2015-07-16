app.controller('AuthController', function($scope, $location, toaster, Auth) {

  if(Auth.signedIn()) {
    $location.path('/');
  }

	$scope.register = function(user) {          
    Auth.register(user)
      .then(function() {
        toaster.pop('success', "登録完了しました");
        $location.path('/dashboard');
      }, function(err) {
        errMessage(err);
      });
  };

	$scope.login = function(user) {
     Auth.login(user)
      .then(function() {
        toaster.pop('success', "ログインしました");
        $location.path('/dashboard');
      }, function(err) {        
        errMessage(err);
      });    
	};

	$scope.changePassword = function(user) {
     Auth.changePassword(user)
      .then(function() {                        
        
        // Reset form
        $scope.email = '';
        $scope.oldPass = '';
        $scope.newPass = '';

        toaster.pop('success', "パスワードを変更しました");
      }, function(err) {
        errMessage(err);      
      });
  };

	function errMessage(err) {

    var msg = "Unknown Error...";

    if(err && err.code) {
      switch (err.code) {
        case "EMAIL_TAKEN": 
          msg = "このEmailアドレスは使用されています"; break;          
        case "INVALID_EMAIL": 
          msg = "不適切なEmailアドレスです"; break;          
        case "NETWORK_ERROR": 
          msg = "ネットワーク障害です  "; break;          
        case "INVALID_PASSWORD": 
          msg = "パスワードが間違っています"; break;          
        case "INVALID_USER":
          msg = "ユーザが不適切です"; break;                  
      } 
    }   

    toaster.pop('error', msg);
  };


});