"use strict";
const wordForm = {
  // This is the templateUrl that renders where the wordForm component is referenced
  templateUrl: "app/form/form.html",
  // The FormService is injected into this controller so the controller has access to the methods of the service
  controller: ["FormService", function(FormService) {
    const vm = this;
    // This method is called by submitting the form from the templateUrl
    vm.saveWords = (words) => {
      // This method will send an updated version of the words object to the service as an argument to the setWords method
      FormService.setWords(words);
    };
  }]
};

angular
  .module("App")
  .component("wordForm", wordForm);