(function() {
  'use strict';

  angular.module('common')
  .factory('loadingHttpInterceptor', LoadingHttpInterceptor);

  LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];
  /**
  Tracks when a request begins and finishes. When a request starts, a progress
  event is emmitted to allow listeners to determine when a request has been initiated.
  When the response completes or a response error occcurs, we assume the request
  has ended and emit a finish event
  */
  function LoadingHttpInterceptor($rootScope, $q) {
    var loadingCount = 0;
    var loadingEventName = 'spinner:activate';

    return {
      request: function(config) {
        // console.log("inside interceptor - config: ", config);
        // As long as we still have any other pending requests, 'loadingEventName' will keep going,
        // and will not throw another event with the 'on' property = 'false'
        // We'll wait until we decrement the counter to 0, then bradcast
        if (++loadingCount === 1) {
          $rootScope.$broadcast(loadingEventName, {on: true});
        }
        return config;
      },

      response: function(response) {
        if (--loadingCount ===0) {
            $rootScope.$broadcast(loadingEventName, {on: false});
        }
        return response;
      },

      responseError: function(response) {
        if (--loadingCount ===0) {
            $rootScope.$broadcast(loadingEventName, {on: false});
        }
        return $q.reject(response);
      }

    }



  }

})();
