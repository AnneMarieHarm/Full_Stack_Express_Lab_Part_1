"use strict";
// $location is injected into the service so we can use $location
function FormService($location) {
  const self = this;
  // This method is the setter. It will re-initialize the words property of this service to whatever object the parameter is referencing.
  // It also redirects the user to the display route
  self.setWords = (words) => {
    self.words = words;
    $location.path("/display");
  };
  // This method is the getter. It returns the words property (which is an object)
  self.getWords = () => {
    return self.words;
  };
}

angular
  .module("App")
  .service("FormService", FormService);