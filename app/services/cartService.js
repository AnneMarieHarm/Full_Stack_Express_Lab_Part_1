"use strict";
function cartService($http) {
    const self = this;
    self.getService = () => {
        return $http({
            method: "GET",
            url: "/phrases"
            };
        };
    };

angular
    .module("App")
    .service("cartService", cartService);
