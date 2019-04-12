import React, { Component } from 'react';
import './App.css';

import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends Component {

	constructor(props){
		super(props);
		this.state = {apiResponse: ""};
	}

	callAPI(){
		fetch("http://localhost:9000/testAPI", {mode: 'cors'})
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
    	this.callAPI();
	}
					//<p className="App-intro">{this.state.apiResponse}</p>  <Route path={"user/:id"} component={User} />

	render() {
	return (
						<Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                    <Route path={"user/:id"} component={User} />
                    <Route path={"home"} component={Home} />
                </Route>
                <Route path={"home-single"} component={Home}/>
            </Router>
	);
	}
}

export default App;
