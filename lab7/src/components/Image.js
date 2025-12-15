import React, {useState} from 'react';

function Image() {
	// Стейт для розмірів та видимості
	const [size, setSize] = useState({width: 600, height: 300});
	const [isVisible, setIsVisible] = useState(true);
	
	const handleAdd = () => setIsVisible(true);
	
	const handleRemove = () => setIsVisible(false);
	
	const handleEnlarge = () => {
		setSize(prev => ({
			width: prev.width * 1.25,
			height: prev.height * 1.25
		}));
	};
	
	const handleReduce = () => {
		setSize(prev => {
			if (prev.width < 50) return prev;
			return {
				width: prev.width / 1.25,
				height: prev.height / 1.25
			};
		});
	};
	
	return (
		<div className="image-section">
			<a href="https://www.0372.ua/">
				{isVisible && (
					<img
						alt="Chernivtsi"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/%D0%A0%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D1%96%D1%8F_%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D1%96%D0%B2_%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8_%D1%96_%D0%94%D0%B0%D0%BB%D0%BC%D0%B0%D1%86%D1%96%D1%97_1.jpg/1920px-%D0%A0%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D1%96%D1%8F_%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D1%96%D0%B2_%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8_%D1%96_%D0%94%D0%B0%D0%BB%D0%BC%D0%B0%D1%86%D1%96%D1%97_1.jpg"
						style={{width: size.width, height: size.height}}
					/>
				)}
			</a>
			
			<div className="button-container">
				<button onClick={handleAdd}>Add</button>
				<button onClick={handleEnlarge}>Enlarge</button>
				<button onClick={handleReduce}>Reduce</button>
				<button onClick={handleRemove}>Remove</button>
			</div>
		</div>
	);
}

export default Image;