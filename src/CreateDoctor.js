import React, { Component } from 'react';
import axios from 'axios'; //library เอาไว้ส่งข้อมูล
export default class CreateDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            department:''
        };
        this._onSubmit = this._onSubmit.bind(this);
    }
    _onSubmit() {
        console.log('submit');
        axios
            .post('http://localhost:1337/doctor',{ //ใช้เพื่อส่งข้อมูล
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                department: this.state.department
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <form role="form">
                First name:  <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={(e) => this.setState({firstName: e.target.value})}
            /> <br />
                Last name:  <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={(e) => this.setState({lastName: e.target.value})}
            /> <br />
                Department:  <input
                type="text"
                name="department"
                value={this.state.department}
                onChange={(e) => this.setState({department: e.target.value})}

            />
                <br />

                <button type="button" onclick={this._onSubmit}>Submit</button>
            </form>
        );
    }
}

