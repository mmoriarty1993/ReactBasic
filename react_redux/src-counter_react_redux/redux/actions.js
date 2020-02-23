/*
包含所有action creator的模块
 */
import {INCREMENT,DECREMENT} from "./action-types";
//增加
export const incrementCreator = (number) => ({type:INCREMENT,data:number})
//减少
export const decrementCreator = (number) => ({type:DECREMENT,data:number})