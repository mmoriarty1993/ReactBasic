import React, {Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import Message from "./message";
import News from "./news";
import MyNavLink from "../components/my-nav-link";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home route component</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink className='' to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink className='' to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                            <Redirect to='/home/news'></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>


        )
    }
}