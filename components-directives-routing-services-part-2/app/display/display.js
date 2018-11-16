"use strict";
const display = {
  // This is the templateUrl that renders where the wordForm component is referenced
  templateUrl: "app/display/display.html",
  // The FormService is injected into this controller so the controller has access to the methods of the service
  controller: ["FormService", function(FormService) {
    const vm = this;
    // Storing the object getWords returns into vm.words
    vm.words = FormService.getWords();
  }]
};

angular
  .module("App")
  .component("display", display);