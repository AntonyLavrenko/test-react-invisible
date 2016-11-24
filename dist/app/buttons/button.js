System.register(["react"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React;
    var Buttons;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            }],
        execute: function() {
            (function (Buttons) {
                /**
                 * Button
                 */
                var Button = (function (_super) {
                    __extends(Button, _super);
                    function Button(props, context) {
                        _super.call(this, props, context);
                        this.btnClass = "ui primary button";
                        this.state = {
                            classes: this.btnClass + (this.props.className ? this.props.className : "")
                        };
                    }
                    Button.prototype.onMouseDown = function () {
                        var classes = this.state.classes.split(" ");
                        if (classes.indexOf("pressed") === -1) {
                            classes.push("pressed");
                        }
                        this.setState({
                            classes: classes.join(" ")
                        });
                        if (typeof this.props.onClick == "function") {
                            this.props.onClick();
                        }
                    };
                    Button.prototype.onMouseUp = function () {
                        var classes = this.state.classes.split(" ");
                        var index = classes.indexOf("pressed");
                        if (index !== -1) {
                            classes.splice(index, 1);
                        }
                        this.setState({
                            classes: classes.join(" ")
                        });
                    };
                    Button.prototype.onMouseOver = function () {
                        var classes = this.state.classes.split(" ");
                        if (classes.indexOf("hover") === -1) {
                            classes.push("hover");
                        }
                        this.setState({
                            classes: classes.join(" ")
                        });
                    };
                    Button.prototype.onMouseOut = function () {
                        var classes = this.state.classes.split(" ");
                        var index = classes.indexOf("hover");
                        if (index !== -1) {
                            classes.splice(index, 1);
                        }
                        var indexPress = classes.indexOf("pressed");
                        if (indexPress !== -1) {
                            classes.splice(indexPress, 1);
                        }
                        this.setState({
                            classes: classes.join(" ")
                        });
                    };
                    Button.prototype.render = function () {
                        var _a = this.props, className = _a.className, color = _a.color, top = _a.top, left = _a.left, children = _a.children;
                        return React.createElement("button", {className: this.state.classes, onMouseOver: this.onMouseOver.bind(this), onMouseOut: this.onMouseOut.bind(this), onMouseUp: this.onMouseUp.bind(this), onMouseDown: this.onMouseDown.bind(this)}, children);
                    };
                    return Button;
                }(React.Component));
                Buttons.Button = Button;
            })(Buttons = Buttons || (Buttons = {}));
            exports_1("Buttons", Buttons);
        }
    }
});

//# sourceMappingURL=button.js.map
