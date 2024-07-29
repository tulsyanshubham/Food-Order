import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant";
import axios from 'axios';

export const getRestaurants = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_RESTAURANTS_REQUEST });
            let link = '/api/v1/eats/stores';
            const { data } = await axios.get(link);
            console.log(data);
            const { restaurants, count } = data;
            dispatch({
                type: ALL_RESTAURANTS_SUCCESS,
                payload: { restaurants, count },
            });
        } catch (error) {
            console.log(error);
        }
    }
}