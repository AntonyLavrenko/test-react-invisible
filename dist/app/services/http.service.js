System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HttpService;
    return {
        setters:[],
        execute: function() {
            /**
             * This service for REST API
             * @class HttpService
             */
            HttpService = (function () {
                function HttpService() {
                }
                /**
                 * Check status
                 * @param response
                 * @returns {*}
                 */
                HttpService.prototype.checkStatusResponse = function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    }
                    else {
                        var error = new Error(response.status);
                        error.response = response.status.toString();
                        throw error;
                    }
                };
                ;
                /**
                 * Parse JSON
                 * @param response
                 * @returns {*}
                 */
                HttpService.prototype.parseJSON = function (response) {
                    return response.json();
                };
                /**
                 * Get GET request
                 * @param url
                 * @returns {Promise<T>}
                 */
                HttpService.prototype.get = function (url) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        self.fetch(url, {
                            method: "GET",
                        })
                            .then(_this.checkStatusResponse)
                            .then(_this.parseJSON)
                            .then(resolve)
                            .catch(reject);
                    });
                };
                /**
                 * Get POST request
                 * @param url
                 * @param data
                 * @returns {Promise<T>}
                 */
                HttpService.prototype.post = function (url, data) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        self.fetch(url, {
                            method: "POST",
                            body: JSON.stringify(data)
                        })
                            .then(_this.checkStatusResponse)
                            .then(_this.parseJSON)
                            .then(resolve)
                            .catch(reject);
                    });
                };
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});

//# sourceMappingURL=http.service.js.map
