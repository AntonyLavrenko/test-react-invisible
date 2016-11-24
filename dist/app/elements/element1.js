/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-addons-transition-group.d.ts" />
System.register(["react", "react-dom"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, ReactDOM;
    var render, findDOMNode, Element1;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            }],
        execute: function() {
            render = ReactDOM.render, findDOMNode = ReactDOM.findDOMNode;
            /**
             *@class Element1
             */
            Element1 = (function (_super) {
                __extends(Element1, _super);
                function Element1(props, context) {
                    _super.call(this, props, context);
                }
                Element1.prototype.componentWillEnter = function (callback) {
                    console.log(this);
                    //const el = findDOMNode(this);
                    //TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
                };
                Element1.prototype.componentWillLeave = function (callback) {
                    console.log(this);
                    //const el = findDOMNode(this);
                    //TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
                };
                Element1.prototype.render = function () {
                    return React.createElement("h1", null, "Hello,");
                };
                return Element1;
            }(React.Component));
            exports_1("Element1", Element1);
        }
    }
});

//# sourceMappingURL=element1.js.map
