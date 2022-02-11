import rootreducer from "./redux/Reducer/combine_redcucer";
import {createStore,applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const Store=createStore(rootreducer,applyMiddleware(logger,thunk));
export default Store;