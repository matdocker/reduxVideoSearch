import React from 'react';
import ReactDom from 'react-dom';

const API_KEY = 'AIzaSyDwl2gNRGqmqErhEzSaGKmOuHo2rGgsAQE';

// Create a new component. This component should create 
//some HTML
const App = () => {
	return <div>Hi!</div>;
}

// Take this components generated HTML and put it 
//on the page (In the DOM)
ReactDom.render(<App />, 
	document.querySelector('.container'));