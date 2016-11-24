/// <reference path="../../../typings/react/react-global.d.ts" />
import * as React from "react";

//const cx = React.addons.classSet; console.log(cx);

interface ButtonProperties {
    className?  : string;
    color?      : string;
    top?        : number;
    left?       : number;
    children?    : any;
    onClick     : any;
}
interface ButtonState {
    classes : string;
}
export namespace Buttons {

    /**
     * Button
     */
    export class Button extends React.Component<ButtonProperties, ButtonState> {

        private btnClass: string;

        constructor(props: ButtonProperties, context: any){
            super(props, context);

            this.btnClass = "ui primary button";

            this.state = {
                classes : this.btnClass + (this.props.className ? this.props.className : "")
            };
        }

        onMouseDown(){
            let classes = this.state.classes.split(" ");

            if(classes.indexOf("pressed") === -1) {
                classes.push("pressed");
            }

            this.setState({
                classes: classes.join(" ")
            });

            if(typeof this.props.onClick == "function"){
                this.props.onClick();
            }
        }

        onMouseUp(){
            let classes = this.state.classes.split(" ");

            let index = classes.indexOf("pressed");

            if(index !== -1) {
                classes.splice(index, 1);
            }

            this.setState({
                classes: classes.join(" ")
            });
        }

        onMouseOver(){
            let classes = this.state.classes.split(" ");

            if(classes.indexOf("hover") === -1) {
                classes.push("hover");
            }

            this.setState({
                classes: classes.join(" ")
            });
        }

        onMouseOut(){
            let classes = this.state.classes.split(" ");

            let index = classes.indexOf("hover");

            if(index !== -1) {
                classes.splice(index, 1);
            }

            let indexPress = classes.indexOf("pressed");

            if(indexPress !== -1) {
                classes.splice(indexPress, 1);
            }

            this.setState({
                classes: classes.join(" ")
            });
        }

        render() {

            const {className, color, top, left, children} = this.props;

            return <button
                className={this.state.classes}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseOut={this.onMouseOut.bind(this)}
                onMouseUp={this.onMouseUp.bind(this)}
                onMouseDown={this.onMouseDown.bind(this)}>
                {children}
            </button>;
        }
    }
}
