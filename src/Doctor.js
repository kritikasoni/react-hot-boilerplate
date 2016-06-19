import React, { Component } from 'react';

export default class Doctor extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <h2>{this.props.lastName}</h2>
                <h3>{this.props.department}</h3>
            </div>
        );
    }
}

