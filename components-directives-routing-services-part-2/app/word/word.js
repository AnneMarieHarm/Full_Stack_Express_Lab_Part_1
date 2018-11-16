"use strict";
const word = {
  // This is the template that renders where the word component is referenced
  template: `
  <p>{{ $ctrl.propertyValue }}</p>
  `,
  // This will bind the propertyValue attribute into this component
  bindings: {
    propertyValue: "<" // one-way expression binding
  }
};

angular
  .module("App")
  .component("word", word);