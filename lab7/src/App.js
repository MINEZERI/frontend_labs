import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';

function App() {
	return (
		<div className="App">
			<Header/>
			<Content/>
			<Image/>
			
			<hr style={{margin: "50px 0"}}/>
			
			<GoodsGallery/>
		</div>
	);
}

export default App;