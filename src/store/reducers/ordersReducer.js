import {ADD_DISH,  REMOVE_DISH} from "../actions/actionTypes";

const initialState = {
	dishes: null,
	deliveryPrice: 150,
	totalPrice: ''
};

const ordersReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_DISH:
			return {
				...state,
				dishes: {
					...state.dishes,
					[action.dish]: state.dishes[action.dish].name + 1
				},
				totalPrice: state.deliveryPrice + [action.dish].price
			};

		case REMOVE_DISH:
			return {
				...state,
				dishes: {
					...state.dishes,
					[action.dish]: state.dishes[action.dish].name - 1
				},
				totalPrice: state.deliveryPrice - [action.dish].price
			};

		default:
			return state
	}
};

export default ordersReducer;