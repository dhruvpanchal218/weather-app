import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducer";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, middleware);
export default store;
