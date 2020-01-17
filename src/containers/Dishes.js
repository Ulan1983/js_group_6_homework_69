import React, {Component} from 'react';

import {connect} from "react-redux";
import {addDish, getDishes} from "../store/actions/dishesActions";

import './Dishes.css';

class Dishes extends Component {
	componentDidMount() {
		this.props.getDishes()
	}


	render() {
		return (
				<div className='page'>
					{this.props.dishes ? Object.keys(this.props.dishes).map(dish => (
						<div className='dishes' key={dish}>
							<img src={this.props.dishes[dish].image} alt=""/>
							<p>{this.props.dishes[dish].name}</p>
							<p><b>{this.props.dishes[dish].price}</b> kgs</p>
							<button onClick={this.props.addDish}>Add to cart</button>
						</div>
					)) : null }

					<div className='cart'>
						<p>x</p>
						<p> Доставка</p>
						<p>Итого</p>
						<button>Удалить</button>
						<button>Place order</button>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		dishes: state.dishes.dishes,
		deliveryPrice: state.orders.deliveryPrice,
		totalPrice: state.orders.totalPrice
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getDishes: () => dispatch(getDishes()),
		addDish: dish => dispatch(addDish(dish))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);