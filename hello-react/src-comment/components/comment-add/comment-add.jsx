import React, {Component} from "react"
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {
    //给组件类指定属性
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }
    state = {
        username:'',
        content:''
    }

    handleSubmit = () => {
        //收集数据并封装成comment对象
        const comment = this.state
        //添加更新状态
        this.props.addComment(comment)
        //清除输入对象
        this.setState({
            username:'',
            content:''
        })

    }

    handleNameChange = (event) =>{
        //读取输入的值
        const username = event.target.value
        //更新输入的状态
        this.setState({username})
    }

    handleContentChange = (event) =>{
        //读取输入的值
        const content = event.target.value
        //更新输入的状态
        this.setState({content})
    }

    render() {
        const{username,content} = this.state

        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        {/*受控组件：表单项输入数据嫩自动收集成状态*/}
                        <input type="text" className="form-control" placeholder="用户名"
                               value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}