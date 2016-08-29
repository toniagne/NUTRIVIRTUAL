angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $ionicPopup, $ionicLoading, $location) {

 $scope.submit = function(contactform, formData) {
  $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
            $http ({
                    method  : 'POST',
                    dataType: 'jsonp',
                    url     : 'http://www.nutrivirtual.com.br/app/login/'+formData['usuario']+'/'+formData['senha'],
                    data    : $scope.formData,  //param method from jQuery //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                      $ionicLoading.hide();  
                      $location.path( "/tab/areatrabalho" );
                    
                }).error(function(data){ 
                   
                  $ionicLoading.hide(); 
                  $location.path( "/tab/areatrabalho" );
                });


 }


})

.controller('AreaTrabalho', function($scope) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  
  $scope.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data2 = [300, 500, 100];

 $scope.labels3 =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
 $scope.data3 = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];


  function dataHoje() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('/');
 }

 $scope.datahoje = dataHoje();

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
