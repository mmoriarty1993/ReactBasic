import React, {Component} from 'react'

import * as actions from '../redux/actions'

export default class App  extends Component {

    increment = () =>{
        //1.得到选择框的值
        const number = this.select.value*1
        //2.调用store的方法更新状态
        this.props.store.dispatch(actions.incrementCreator(number))
    }

    decrement = () =>{
        const number = this.select.value*1
        this.props.store.dispatch(actions.decrementCreator(number))
    }

    increOdd = () =>{
        const number = this.select.value*1
        const count = this.props.store.getState()
        if (count%2===1){
            this.props.store.dispatch(actions.incrementCreator(number))
        }
    }

    increAsync =() =>{
        const number = this.select.value*1
        setTimeout(()=>{
            this.props.store.dispatch(actions.incrementCreator(number))
        },1000)
    }

    render() {
        const count = this.props.store.getState()
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