angular.module('starter.controllers', ['ngCookies'])

.controller('DashCtrl',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
 $scope.dadosUser = $cookieStore.get('dadosUser');
 $scope.submit = function(contactform, formData) {
  $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });

  var url = 'http://www.nutrivirtual.com.br/aplicativo/login/?callback=JSON_CALLBACK&user='+formData['usuario']+'&pass='+formData['senha'];
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'SUA SENHA OU LOGIN NÃO ESTAO CORRETOS, CONFIRA E TENTE NOVAMENTE'
                         });
                      } else {   
                         $cookieStore.put('dadosUser', data);
                        $state.go('tab.area-trabalho');
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });

                  });
            
    

 

 } 

 
})

.controller('AreaTrabalho', function($scope, $cookieStore) {
  $scope.dadosUser = $cookieStore.get('dadosUser');

   
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

.controller('LerMensagens',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
    $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });


   var url = 'http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=1';
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ERRO INTERNO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE'
                         });
                      } else {   
                         //$cookieStore.put('dadosUser', data);
                        //$state.go('tab.area-trabalho');

                        console.log(data);
                        $scope.mensagens = data;
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });

                  });
})

.controller('LerMensagensReceitas',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
    $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });


   var url = 'http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=2';
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ERRO INTERNO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE'
                         });
                      } else {   
                         //$cookieStore.put('dadosUser', data);
                        //$state.go('tab.area-trabalho');

                        console.log(data);
                        $scope.mensagens = data;
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'VOCÊ AINDA NÃO POSSUI POSTS NESSA CATEGORIA'
                     });

                  });
})

.controller('LerMensagensCuriosidades',  function($scope, $http, $ionicPopup, $ionicLoading, $location, $state, $cookieStore) {
    $ionicLoading.show({
            content: 'Carregando USUÁRIO',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });


   var url = 'http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=3';
  
 $http.jsonp(url).success(function(data) {
                       $ionicLoading.hide();  
                      if (data == ""){
                        return $ionicPopup.alert({
                           title: 'ATENÇÃO.',
                           template: 'ERRO INTERNO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE'
                         });
                      } else {   
                         //$cookieStore.put('dadosUser', data);
                        //$state.go('tab.area-trabalho');

                        console.log(data);
                        $scope.mensagens = data;
                      }


                  }).error(function(data) {
                      $ionicLoading.hide();   
                      return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'VOCÊ AINDA NÃO POSSUI POSTS NESSA CATEGORIA'
                     });

                  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
