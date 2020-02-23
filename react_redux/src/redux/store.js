import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import reducers from './reducers'


//生成一个store对象
const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store