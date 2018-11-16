"use strict";
function cartService($http) {

}

angular
    .module("App")
    .service("cartService", cartService);
// ------------------------------------------------
// "use strict";
// function ListService($http) {
//     const self = this;
//     self.getPhrases = () =>{
//         return $http({
//             method: "GET",
//             url: "/phrases"
//         });
//     }
// }
// angular
//     .module("GabeIsAwesome")
//     .service("ListService", ListService);