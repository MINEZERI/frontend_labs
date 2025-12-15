import React from 'react';

function GoodsCard({image, name, price}) {
	return (
		<div className="goods-card">
			<img src={image} alt={name}/>
			<h3>{name}</h3>
			<p>Price: {price} UAH</p>
		</div>
	);
}

export default GoodsCard;