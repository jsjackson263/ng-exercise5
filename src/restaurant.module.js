(function() {
  'use strict';

  /**
  Restaurant module that includes the public module as a dependency
  */
  angular.module('restaurant', ['public'])
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$urlRouterProvider'];
  function RoutesConfig($urlRouterProvider) {

    // If user goes to a path that doesn't exist, re-direct to public root
    $urlRouterProvider.otherwise('/');
  }

})();
