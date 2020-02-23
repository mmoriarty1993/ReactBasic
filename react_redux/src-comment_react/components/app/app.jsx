import React, {Component} from "react"
import CommentAdd from "../comment-add/comment-add"
import CommentList from "../comment-list/comment-list";

export default class  extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments:[
    //             {username:'Tom',content:'123'},
    //             {username:'Jack',content:'345'}
    //         ]
    //     }
    // }
    //给组件对象指定state属性
    state = {
        /*comments:[
            {username:'Tom',content:'123'},
            {username:'Jack',content:'345'}
        ]*/
        comments:[]
    }
    componentDidMount() {
        //模拟发送异步ajax请求获得数据
        setTimeout(() => {
            const comments = [
                {username:'Tom',content:'123'},
                {username:'Jack',content:'345'}
            ]
            //更新状态
            this.setState({comments})
        },1000)
    }

    //添加评论
    addComment = (comment) => {
        //取出数据
        const {comments} = this.state
        comments.unshift(comment)
        //更新数据
        this.setState({comments})
    }

    //删除评论
    deleteComment = (index) => {
        //取出数据
        const {comments} = this.state
        comments.splice(index,1)
        //更新数据
        this.setState({comments})
    }


    render() {
        const {comments} = this.state
        return (<div id="app">
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>

                </div>
            </div>
        </div>
        )
    }
}