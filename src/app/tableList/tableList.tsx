/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-addons-transition-group.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as _ from "underscore";

interface ElementProperties {

}
interface ElementState {
    list: any[],
    from: number,
    limit: number
}

/**
 *@class Element
 */
export class TableList extends React.Component<ElementProperties, ElementState> {

    constructor(props: ButtonProperties, context: any){
        super(props, context);

        this.state = {
            list: []
        };

    }

    componentWillReceiveProps(){

        this.setState({
            list: _.clone(this.props.index.state.listRepositories).splice(this.props.index.state.from, this.props.index.state.limit),
        });
    }

    render() {
        return <table className="ui celled striped table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Homepage</th>
                </tr>
            </thead>
            <tbody>

                {this.state.list.map(function(object, i){

                    return (<tr>
                        <td className="collapsing">
                            {object.name}
                        </td>
                        <td>{object.description}</td>
                        <td>
                            <a href={object.html_url}>{object.name}</a>
                        </td>
                    </tr>)

                })}

            </tbody>
        </table>;
    }
}