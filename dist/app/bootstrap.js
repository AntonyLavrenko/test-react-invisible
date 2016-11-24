/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
System.register(["react", "./services/http.service", "./tableList/tableList", "./pagination/pagination"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, http_service_1, tableList_1, pagination_1;
    var Application;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (tableList_1_1) {
                tableList_1 = tableList_1_1;
            },
            function (pagination_1_1) {
                pagination_1 = pagination_1_1;
            }],
        execute: function() {
            /*
             * A simple React component
             */
            Application = (function (_super) {
                __extends(Application, _super);
                function Application(props, states) {
                    _super.call(this, props, states);
                    this.httpService = new http_service_1.HttpService();
                    this.state = {
                        listRepositories: [],
                        from: 0,
                        limit: 10
                    };
                    this.indexAction();
                }
                Application.prototype.indexAction = function () {
                    var _this = this;
                    this.httpService.get("https://api.github.com/repositories")
                        .then(function (result) {
                        _this.setState({
                            listRepositories: result
                        });
                    });
                };
                /**
                 * On change list - from
                 * @param from
                 */
                Application.prototype.onChangeFrom = function (from) {
                    this.setState({
                        from: from * this.state.limit
                    });
                };
                Application.prototype.render = function () {
                    return React.createElement("div", null, React.createElement(tableList_1.TableList, {index: this}), React.createElement(pagination_1.Pagination, {index: this, onChange: this.onChangeFrom.bind(this)}));
                };
                return Application;
            }(React.Component));
            /*
             * Render the above component into the div#app
             */
            React.render(React.createElement(Application, null), document.getElementById('app'));
        }
    }
});

//# sourceMappingURL=bootstrap.js.map
