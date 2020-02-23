import React from "react";
import {render} from "react-dom";

import App from "./components/app";
import store from './redux/store'

function rend(){
    render(<App store={store}/>, document.getElementById('root'))
}
//初始化渲染
rend()
//订阅监听(store中状态变化就会自动调用render进行重绘)
store.subscribe(rend)