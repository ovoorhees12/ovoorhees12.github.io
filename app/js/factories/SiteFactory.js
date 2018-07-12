/**
 * Factory: SiteFactory
 */
angular.module('StonyBrookUltimate')
  .factory('SiteFactory', function SiteFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.showSlides = function() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    };

    return exports;
  })
  .factory('NavFactory', function NavFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.navBar = [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Media', path: '/media' },
        { name: 'Contact', path: '/contact' }
    ];

    exports.goTo = function(path) {
        console.log(path)
        $location.path(path)
    };

    return exports;
  });
