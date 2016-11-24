/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-addons-transition-group.d.ts" />
System.register(["react", "underscore"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, _;
    var Pagination;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            /**
             *@class Element
             */
            Pagination = (function (_super) {
                __extends(Pagination, _super);
                function Pagination(props, context) {
                    _super.call(this, props, context);
                    this.state = {
                        countPages: 0,
                        currentPage: 0
                    };
                }
                Pagination.prototype.componentWillReceiveProps = function () {
                    this.setState({
                        countPages: Math.ceil(this.props.index.state.listRepositories.length / this.props.index.state.limit),
                        currentPage: Math.ceil(this.props.index.state.from / this.props.index.state.limit)
                    });
                };
                Pagination.prototype.render = function () {
                    var _this = this;
                    return React.createElement("div", {className: "ui borderless menu"}, _.range(this.state.countPages).map(function (number) {
                        return (React.createElement("a", {className: _this.state.currentPage == number ? "item active" : "item", onClick: _this.props.onChange.bind(_this.props.index, number)}, number + 1));
                    }));
                };
                return Pagination;
            }(React.Component));
            exports_1("Pagination", Pagination);
        }
    }
});

//# sourceMappingURL=pagination.js.map
