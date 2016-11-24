/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-addons-transition-group.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as TweenMax from "TweenMax"

interface ElementProperties {
    active: boolean;
    children: any;
    index: number;

    transformX?: number;
    transformY?: number;
    transformRotate? : number;
}
interface ElementState {
    active: boolean;
    action: boolean;
}

/**
 *@class Element
 */
export class Element extends React.Component<ElementProperties, ElementState> {

    constructor(props: ButtonProperties, context: any){
        super(props, context);

        this.state = {
            active: true,
            action: false
        };

    }

    componentWillReceiveProps(){
        this.setState({active: this.props.active, action: this.state.active !== this.props.active});
    }

    render() {

        if(this.state.action === true){
            const el = React.findDOMNode(this);

            TweenMax.fromTo(el, 0.3, {y: 0, x: 0, opacity: 1}, {
                x: this.props.transformX ? this.props.transformX : 0,
                y: this.props.transformY ? this.props.transformY : 0,
                rotation: this.props.transformRotate ? this.props.transformRotate : 0,
                opacity: 0, onComplete: ()=>{}});
        }

        return <h1>{this.props.children}</h1>;
    }
}