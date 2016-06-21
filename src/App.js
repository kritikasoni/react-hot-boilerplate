import React, { Component } from 'react';
import {Link} from 'react-router';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            users: []
        }
    }
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <ul role="nav">
                    <li><Link to="/doctors">Doctor List</Link></li>
                    <li><Link to="/doctors/create">Doctor create</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}