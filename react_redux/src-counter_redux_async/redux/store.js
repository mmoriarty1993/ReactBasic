import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {counter} from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

//生成一个store对象
const store = createStore(counter,composeWithDevTools(applyMiddleware(thunk)))//内部会第一次调用reducer函数得到初始的state

export default store