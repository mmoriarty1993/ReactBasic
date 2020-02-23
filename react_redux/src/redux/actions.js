/*
包含所有action creator的模块
 */
import {ADDCOMMENT,DELETECOMMENT,RECEIVECOMMENT} from './action-types'
//添加评论
export const addComment = (comment) => ({type:ADDCOMMENT,data:comment})
//删除评论
export const deleteComment = (index) => ({type:DELETECOMMENT,data:index})
//接收后台数据
const receiveComment = (comments) =>({type:RECEIVECOMMENT,data:comments})

//异步从后台获取数据的action
export const getComments = () => {
    return dispatch => {
        setTimeout(()=>{
            const comments = [
                {username:'Tom',content:'123'},
                {username:'Jack',content:'345'}
            ]
            //1s后分发一个接收后台数据的action
            dispatch(receiveComment(comments))
        },1000)
    }
}