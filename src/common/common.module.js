(function() {
  'use strict';

  angular.module('common', [])
  .constant('ApiPath', 'https://jsjackson263-menu.herokuapp.com')
  // .constant('ApiPath', 'https://davids-restaurant.herokuapp.com')
  .config(HTTPProviderConfig);

  // Add the interceptor to the $httpProvider.interceptors array:
  HTTPProviderConfig.$inject = ['$httpProvider'];
  function HTTPProviderConfig($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }

})();
