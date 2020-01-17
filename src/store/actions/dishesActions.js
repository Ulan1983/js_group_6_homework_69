import axiosDishes from "../../axios-dishes";
import {
	ADD_DISH,
	DISH_ERROR,
	DISH_REQUEST,
	DISH_SUCCESS,
	REMOVE_DISH
} from "./actionTypes";

export const dishRequest = () => ({type: DISH_REQUEST});
export const dishSuccess = response => ({type: DISH_SUCCESS, response});
export const dishError = error => ({type: DISH_ERROR, error});

export const addDish = dish => ({type: ADD_DISH, dish});
export const removeDish = dish => ({type: REMOVE_DISH, dish});

export const getDishes = () => {
	return dispatch => {
		dispatch(dishRequest());
		axiosDishes.get('/dishes.json').then(response => {
			dispatch(dishSuccess(response.data));
		}, error => {
			dispatch(dishError(error));
		})
	}
};