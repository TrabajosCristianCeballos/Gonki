import React, { Component } from 'react';
import './App.css';

import NavBarMainPage from './NavBarMainPage';
import MainPage from './MainPage';

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
					//<p className="App-intro">{this.state.apiResponse}</p>

	render() {
	return (
	  <div className="App" >

			<NavBarMainPage />

			<header className="App-header">
				<MainPage />
	    </header>
	  </div>
	);
	}
}

export default App;
