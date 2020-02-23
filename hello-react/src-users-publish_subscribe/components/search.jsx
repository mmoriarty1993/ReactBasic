import React, {Component} from "react"
import PubSub from 'pubsub-js'
export default class Search extends Component {
    state = {
        searchName: ''
    }

    search = () => {
        /*//非受控组件版得到输入的关键字
          const searchName = this.input.value.trim()*/
        //受控组件式得到输入的关键字
        const {searchName} = this.state
        if (searchName) {
            //搜索
            //发布消息
            PubSub.publish('search',searchName)
        }
    }

    handleChange = (event) => {
        //读取输入的值
        const searchName = event.target.value
        //更新searchName的状态
        this.setState({searchName})
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        {/*非受控组件*/}
                        {/*<input type="text" placeholder="enter the name you search" ref={input => this.input = input}/>*}
                        {/*受控组件*/}
                        <input type="text" placeholder="enter the name you search" onChange={this.handleChange}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}