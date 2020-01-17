import {
	DISH_SUCCESS
} from "../actions/actionTypes";

const initialState = {
	dishes: null
};

const dishReducer = (state = initialState, action) => {
	switch(action.type) {
		case DISH_SUCCESS:
			return {
				...state,
				dishes: action.response
			};

		default:
			return state
	}
};


export default dishReducer;