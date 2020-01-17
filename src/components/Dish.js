import React from 'react';

const Dish = props => {
	return (
		<div className="dish">
			<div>
				<img src={props.image} alt=""/>
				<p>{props.name}</p>
				<p><b>Price: </b>{props.price} kgs</p>
				<button onClick={props.onClick}>Add to cart</button>
			</div>
		</div>
	);
};

export default Dish;