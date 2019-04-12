import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {siteProfile} from "./components/siteProfile";


//main class that handle the web-page
class App extends Component {

	//App constructor with an additional atribute
	constructor(props){
		super(props);
		this.state = {apiResponse: ""};
	}

	//fetch the api and process the response to save it on a variable
	callAPI(){
		fetch("http://localhost:9000/testAPI", {mode: 'cors'})
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
	}

	//Method that is called when the component start
	componentWillMount() {
    	this.callAPI();
	}
					//<p className="App-intro">{this.state.apiResponse}</p>  <Route path={"user/:id"} component={User} />


	// render of all the graphic interfaces
	render() {
	return (
			<div className="bg-color">
				<Router history={browserHistory}>
            <Route path={"/"} component={Root} >
                <IndexRoute component={Home} />
                <Route path={"user/:id"} component={User} />
                <Route path={"home"} component={Home} />
								<Route path={"site/:id"} component={siteProfile} />
            </Route>
            <Route path={"home-single"} component={Home}/>
        </Router>
			</div>
	);
	}
}

export default App;
