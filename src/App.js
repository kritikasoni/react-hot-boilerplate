import React, { Component } from 'react';
import axios from 'axios';
import DoctorList from './DoctorList';
import CreateDoctor from './CreateDoctor';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            users: []
        }
    }

    componentWillMount() {
        // axios
        //     .get('http://localhost:1337/user')
        //     .then(response => {
        //         this.setState({
        //             users : response.data
        //         });
        //     });
    }
    render() {
        let users = this.state.users.map((user) => { //map ทำเพื่อเอาtagไปใส่
            return (<p>{user.id + user.name}</p>);
        });
        return (
            <div>
                <h1>{this.props.title}</h1>
                <CreateDoctor />
            </div>
        );
    }
}
