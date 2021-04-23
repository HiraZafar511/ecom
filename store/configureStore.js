import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ak from "./reducers/ak";



const reducers = combineReducers({
 ak

 
});

// export const initStore = (initialState = {}) => {
//   return createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// };
const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store;