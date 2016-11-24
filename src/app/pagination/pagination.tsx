/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-addons-transition-group.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as _ from "underscore";

interface ElementProperties {

}
interface ElementState {
    countPages: number
}

/**
 *@class Element
 */
export class Pagination extends React.Component<ElementProperties, ElementState> {

    constructor(props: ButtonProperties, context: any){
        super(props, context);

        this.state = {
            countPages: 0,
            currentPage: 0
        };

    }

    componentWillReceiveProps(){

        this.setState({
            countPages: Math.ceil(this.props.index.state.listRepositories.length / this.props.index.state.limit),
            currentPage: Math.ceil(this.props.index.state.from / this.props.index.state.limit)
        });
    }

    render() {
        return <div className="ui borderless menu">
            {_.range(this.state.countPages).map(number => {
                return (<a className={this.state.currentPage == number ? "item active": "item"} onClick={this.props.onChange.bind(this.props.index, number)}>{number + 1}</a>)
            })}
        </div>;
    }
}