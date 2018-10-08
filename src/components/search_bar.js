import React, { Component } from 'react';

class SearchBar extends Component {
	
	constructor(props){
		super(props); //Component has a method called super() [parent method]

		this.state = {term:''}; // Record State
	}

	render(){
		return (
			<div className='search-bar'>
			<span>
			<i class="fas fa-search d-inline fa-2x"></i>
			</span>
				<input 
				value={this.state.term}
				 onChange={event => this.onInputChange( event.target.value)} />
				 
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;