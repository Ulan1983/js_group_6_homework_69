import axiosDishes from "../../axios-dishes";
import {ORDER_ERROR, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderError = error => ({type: ORDER_ERROR, error});

export const postOrder = order => {
	return dispatch => {
		dispatch(orderRequest());
		axiosDishes.post('/dishOrders.json', order).then(response => {
			dispatch(orderSuccess());
		}, error => {
			dispatch(orderError(error));
		})
	}
};