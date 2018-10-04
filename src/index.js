import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDwl2gNRGqmqErhEzSaGKmOuHo2rGgsAQE';
YTSearch({key: API_KEY, term:'surfboards'}, 
	data => console.log(data));

// Create a new component. This component should create 
//some HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state = {videos: []};

		YTSearch({key: API_KEY, term:'surfboards'}, 
			videos => this.setState({ videos })
			);
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

// Take this components generated HTML and put it 
//on the page (In the DOM)
ReactDom.render(<App />, 
	document.querySelector('.container'));