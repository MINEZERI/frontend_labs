import React from 'react';
import GoodsCard from './GoodsCard';

const goodsData = [
	{id: 1, name: "Apple", price: 20, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"},
	{id: 2, name: "Pear", price: 30, image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pears.jpg"},
	{
		id: 3,
		name: "Grapes",
		price: 50,
		image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg"
	},
	{
		id: 4,
		name: "Peach",
		price: 40,
		image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg"
	},
	{id: 5, name: "Banana", price: 25, image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"},
	{
		id: 6,
		name: "Orange",
		price: 35,
		image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
	},
];

function GoodsGallery() {
	return (
		<div className="gallery">
			{goodsData.map(item => (
				<GoodsCard
					key={item.id}
					image={item.image}
					name={item.name}
					price={item.price}
				/>
			))}
		</div>
	);
}

export default GoodsGallery;