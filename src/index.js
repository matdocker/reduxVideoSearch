import React, {Component} from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyDwl2gNRGqmqErhEzSaGKmOuHo2rGgsAQE';
YTSearch({key: API_KEY, term:'surfboards'}, 
	data => console.log(data));

// Create a new component. This component should create 
//some HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	}
		

		videoSearch(term){
			YTSearch({key: API_KEY, term: term}, 
				videos => this.setState({ 
					videos: videos,
					selectedVideo: videos[0]
				})
			);
		}
	

	render() {
		// debounce call function every 300ms and pass into Search bar component below
		const VideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				{/* deboun passed into SearchBar component vis onSearchTermChange */}
				<SearchBar onSearchTermChange={VideoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		)
	}
}

// Take this components generated HTML and put it 
//on the page (In the DOM)
ReactDom.render(<App />, 
	document.querySelector('.container'));