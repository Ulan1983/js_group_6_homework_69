import axios from 'axios';


const axiosDishes = axios.create({
	baseURL: 'https://burger-builder-ulan-beltaev.firebaseio.com/'
});


export default axiosDishes;