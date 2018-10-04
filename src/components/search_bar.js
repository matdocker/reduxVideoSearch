import React, { Component } from 'react';

class SearchBar extends Component {
	
	constructor(props){
		super(props); //Component has a method called super() [parent method]

		this.state = {term:''}; // Record State
	}

	render(){
		return (
			<div>
				<input 
				value={this.state.term}
				 onChange={event => this.setState({term: event.target.value})} />
			</div>
		);
	}
}

export default SearchBar;