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
    var TableList;
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
            TableList = (function (_super) {
                __extends(TableList, _super);
                function TableList(props, context) {
                    _super.call(this, props, context);
                    this.state = {
                        list: []
                    };
                }
                TableList.prototype.componentWillReceiveProps = function () {
                    this.setState({
                        list: _.clone(this.props.index.state.listRepositories).splice(this.props.index.state.from, this.props.index.state.limit),
                    });
                };
                TableList.prototype.render = function () {
                    return React.createElement("table", {className: "ui celled striped table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Name"), React.createElement("th", null, "Description"), React.createElement("th", null, "Homepage"))), React.createElement("tbody", null, this.state.list.map(function (object, i) {
                        return (React.createElement("tr", null, React.createElement("td", {className: "collapsing"}, object.name), React.createElement("td", null, object.description), React.createElement("td", null, React.createElement("a", {href: object.url}, object.name))));
                    })));
                };
                return TableList;
            }(React.Component));
            exports_1("TableList", TableList);
        }
    }
});

//# sourceMappingURL=tableList.js.map
