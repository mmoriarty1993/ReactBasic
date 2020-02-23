import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    static propTypes = {
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired
    }

    increment = () =>{
        //1.得到选择框的值
        const number = this.select.value*1
        //2.调用store的方法更新状态
        this.props.increment(number)
    }

    decrement = () =>{
        const number = this.select.value*1
        this.props.decrement(number)
    }

    increOdd = () =>{
        const number = this.select.value*1
        const {count} = this.props
        if (count%2===1){
            this.props.increment(number)
        }
    }

    increAsync =() =>{
        const number = this.select.value*1
        this.props.incrementAsync(number)
    }

    render() {
        const {count} = this.props
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
