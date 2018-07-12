/**
 * Directive: Site <site></site>
 */
angular.module('StonyBrookUltimate')
  .directive('site', function SiteDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "html/views/home.html",
      controllerAs: 'site',

      controller: function (SiteFactory) {
        

        this.showSlides = function() {
          SiteFactory.showSlides();
        };

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  })
  .directive('navbar', function NavDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "html/directives/nav.tmpl.html",
      controllerAs: 'navbar',

      controller: function (NavFactory) {
        this.navBar = [
            { name: 'Home', path: '/home' },
            { name: 'About', path: '/about' },
            { name: 'Schedule', path: '/schedule' },
            { name: 'Media', path: '/media' },
            { name: 'Contact', path: '/contact' }
        ];

        this.goTo = function (path) {
          NavFactory.goTo(path);
        };

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });