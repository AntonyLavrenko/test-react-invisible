System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HttpService;
    return {
        setters:[],
        execute: function() {
            HttpService = (function () {
                function HttpService() {
                }
                HttpService.prototype.get = function (url) {
                    return new Promise(function (res, rej) {
                        self.fetch();
                    });
                };
                HttpService.prototype.post = function () {
                };
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});

//# sourceMappingURL=http.service.js.map
