/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $http, $location) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    $scope.submitForm = function(formData) {

      console.log(formData['nome']);
     var url =  'http://www.nutrivirtual.com.br/aplicativo/cadastro/?callback=JSON_CALLBACK&nome='+formData['nome']+'&cidade='+formData['cidade']+'&estado='+formData['estado']+'&email='+formData['email']+'&telefone='+formData['telefone'];
      $http.jsonp(url).
      success(function(data, status, headers, config) {
        alert('SEU CADASTRO FOI ENVIADO COM SUCESSO !');
        $location.path("/app/profile");
      }).
      error(function(data, status, headers, config) {
        console.log('erro');
      });
    };

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $http, $location) {
    // Set Header
    $scope.submitForm = function(formData) {

      console.log(formData['nome']);
     var url =  'http://www.nutrivirtual.com.br/aplicativo/cadastro/?callback=JSON_CALLBACK&nome='+formData['nome']+'&cidade='+formData['cidade']+'&estado='+formData['estado']+'&email='+formData['email']+'&telefone='+formData['telefone'];
      $http.jsonp(url).
      success(function(data, status, headers, config) {
        alert('SEU CADASTRO FOI ENVIADO COM SUCESSO !');
        $location.path("/app/profile");
      }).
      error(function(data, status, headers, config) {
        console.log('erro');
      });
    };
/*
    function(contactform, formData) {
          console.log('teste');
        var url = 'http://www.nutrivirtual.com.br/aplicativo/cadastro/?callback=JSON_CALLBACK&nome='+formData['nome']+'&estado='+formData['estado']+'&cidade='+formData['cidade']+'&email='+formData['email']+'&telefone='+formData['telefone']+'&acesso_30_reais='+formData['acesso_30_reais']+'&aceitacontrato='+formData['aceitacontrato']+'&reeducacao_alimentar='+formData['reeducacao_alimentar']+'&ganho_de_peso='+formData['ganho_de_peso']+'&emagrecimento='+formData['emagrecimento']+'&outros_interesses='+formData['...(line truncated)...
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
        e.error = "CADASTRO ENVIADO";
alert('SEU CADASTRO FOI ENVIADO COM SUCESSO !');


    }*/

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
    var url = "http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=1";
    var url2 = "http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=3";
    $http.jsonp(url).
    success(function(data, status, headers, config) {
      $scope.itemsdireita = data;
    }).
    error(function(data, status, headers, config) {
      console.log('erro');
    });

    $http.jsonp(url2).
    success(function(data, status, headers, config) {
      $scope.itemsEsquerda = data;
    }).
    error(function(data, status, headers, config) {
      console.log('erro');
    });
})

.controller('VerDetalhes', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $http) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);
  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 700);



    var url = "http://www.nutrivirtual.com.br/aplicativo/veritem/?callback=JSON_CALLBACK&codigo="+$stateParams.id;
    $http.jsonp(url).
    success(function(data, status, headers, config) {
      $scope.itemsdireita = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      console.log('erro');
    });

})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $http) {
  $scope.$parent.showHeader();
  $scope.$parent.clearFabs();
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$parent.setHeaderFab(false);

  // Set Motion
  $timeout(function() {
      ionicMaterialMotion.slideUp({
          selector: '.slide-up'
      });
  }, 300);

  $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
          startVelocity: 3000
      });
  }, 500);


    var url = "http://www.nutrivirtual.com.br/aplicativo/mensagens/?callback=JSON_CALLBACK&categoria=2";
    $http.jsonp(url).
    success(function(data, status, headers, config) {
      $scope.itemsdireita = data;
    }).
    error(function(data, status, headers, config) {
      console.log('erro');
    });




})

;
