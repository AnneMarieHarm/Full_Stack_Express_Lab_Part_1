"use strict";
angular
  .module("App")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/display", {
        // Load the display component
        template: "<display></display>"
      })
      // When the user visits the form route...
      .when("/form", {
        // Load the form component
        template: "<word-form></word-form>"
      })
      // When the user is at the "home" page (or hasn't chosen a route)...
      .when("/", {
        // Load this template
        template: "<p>Home</p>"
      });
  }]);