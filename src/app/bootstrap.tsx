/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import {HttpService} from "./services/http.service";

import {TableList} from "./tableList/tableList"
import {Pagination} from "./pagination/pagination";

interface AppProps {}
interface AppState {
    listRepositories: Object[];
}

/*
 * A simple React component
 */
class Application extends React.Component<AppProps, AppState> {

    private httpService: HttpService;

    constructor(props: AppProps, states: AppState){
        super(props, states);

        this.httpService = new HttpService();

        this.state = {
            listRepositories: [],
            from: 0,
            limit: 10
        };

        this.indexAction();
    }

    indexAction(){
        this.httpService.get("https://api.github.com/repositories")
            .then(result => {
                this.setState({
                    listRepositories: result
                })
            })
    }

    /**
     * On change list - from
     * @param from
     */
    onChangeFrom(from: number){
        this.setState({
            from: from * this.state.limit
        })
    }

    render() {

        return <div>
            <TableList index={this} />
            <Pagination index={this} onChange={this.onChangeFrom.bind(this)} />
        </div>;
    }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));