/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-addons-transition-group.d.ts" />
System.register(["react", "TweenMax"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, TweenMax;
    var Element;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (TweenMax_1) {
                TweenMax = TweenMax_1;
            }],
        execute: function() {
            /**
             *@class Element
             */
            Element = (function (_super) {
                __extends(Element, _super);
                function Element(props, context) {
                    _super.call(this, props, context);
                    this.state = {
                        active: true,
                        action: false
                    };
                }
                Element.prototype.componentWillReceiveProps = function () {
                    this.setState({ active: this.props.active, action: this.state.active !== this.props.active });
                };
                Element.prototype.render = function () {
                    if (this.state.action === true) {
                        var el = React.findDOMNode(this);
                        TweenMax.fromTo(el, 0.3, { y: 0, x: 0, opacity: 1 }, {
                            x: this.props.transformX ? this.props.transformX : 0,
                            y: this.props.transformY ? this.props.transformY : 0,
                            rotation: this.props.transformRotate ? this.props.transformRotate : 0,
                            opacity: 0, onComplete: function () { } });
                    }
                    return React.createElement("h1", null, this.props.children);
                };
                return Element;
            }(React.Component));
            exports_1("Element", Element);
        }
    }
});

//# sourceMappingURL=element.js.map
