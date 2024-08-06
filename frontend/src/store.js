import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
