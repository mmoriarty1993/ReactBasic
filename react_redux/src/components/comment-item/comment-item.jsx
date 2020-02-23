import React, {Component} from "react"
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component {

    //给组件类指定属性
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired

    }

    handleDelete = (event) =>{
        const {comment,deleteComment,index} = this.props
        //提示
        if (window.confirm(`确定删除${comment.username}的评论吗？`)){
            //确定后删除
            deleteComment(index)
        }
        event.preventDefault()
    }

    render() {
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a  href={"#"} onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>

        )
    }
}