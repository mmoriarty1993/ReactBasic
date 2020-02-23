/*
包含所有action creator的模块
同步的action返回的都是一个对象
异步的action返回的都是一个函数
 */
import {INCREMENT,DECREMENT} from "./action-types";
//增加
export const incrementCreator = (number) => ({type:INCREMENT,data:number})
//减少
export const decrementCreator = (number) => ({type:DECREMENT,data:number})
//异步增加
export const incrementAsyncCreator = (number) => {
    return dispatch => {
        //异步的代码
        setTimeout(() =>{
            //1s之后才分发一个增加的action
            dispatch(incrementCreator(number))
        },1000)
    }
}

