import React, { Component } from 'react';
import axios from 'axios'; //library เอาไว้ส่งข้อมูล
export default class UpdateDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            department:''
        };
        this._onSubmit = this._onSubmit.bind(this);
    }
    _onSubmit(e) {
        e.preventDefault();
        console.log('submit');
        axios
            .put('http://localhost:1337/doctor/2',{ //ใช้เพื่อส่งข้อมูล
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

    componentWillMount() {
        axios
            .get('http://localhost:1337/doctor/2')
            .then(response => {
                this.setState({
                    firstName : response.data.firstName,
                    lastName: response.data.lastName,
                    department: response.data.department
                });
            });
    }
    render() {
        return (
            <form role="form" onSubmit={this._onSubmit}>

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

                <button type="submit" >Submit</button>
            </form>
        );
    }
}


