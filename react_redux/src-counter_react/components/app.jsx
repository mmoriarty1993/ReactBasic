import React, {Component} from 'react'
export default class App  extends Component {
    state = {
        count:0
    }

    increment = () =>{
        //1.得到选择框的值
        const number = this.select.value*1
        //2.得到现在count的值并计算
        const count = this.state.count + number
        //3.更新
        this.setState({count})
    }

    decrement = () =>{
        const number = this.select.value*1
        const count = this.state.count - number
        this.setState({count})
    }

    increOdd = () =>{
        const number = this.select.value*1
        const count = this.state.count
        if (count%2===1){
            this.setState({count: count+number})
        }
    }

    increAsync =() =>{
        const number = this.select.value*1
        const count = this.state.count
        setTimeout(()=>{
            this.setState({count: count+number})
        },1000)
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref = {select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                    <button onClick={this.increOdd}>increment if odd</button>&nbsp;&nbsp;
                    <button onClick={this.increAsync}>increment async</button>
                </div>
            </div>
        )
    }
}