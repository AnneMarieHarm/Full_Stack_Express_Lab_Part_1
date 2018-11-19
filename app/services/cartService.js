"use strict";
function cartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/items"
            });
        };
    };

angular
    .module("App")
    .service("cartService", cartService);
