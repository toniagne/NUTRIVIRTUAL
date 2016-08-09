angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.lOJA', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/lOJA.html',
        controller: 'lOJACtrl'
      }
    }
  })

  .state('tabsController.pOSTSELECIONADO', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/pOSTSELECIONADO.html',
        controller: 'pOSTSELECIONADOCtrl'
      }
    }
  })

  .state('tabsController.faleComANUTRIVIRTUAL', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/faleComANUTRIVIRTUAL.html',
        controller: 'faleComANUTRIVIRTUALCtrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});