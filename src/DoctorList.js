import React, { Component } from 'react';
import axios from 'axios';
import Doctor from './Doctor';

export default class DoctorList extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            doctors: []
        }
    }

    componentWillMount() {
        axios
            .get('http://localhost:1337/doctor')
            .then(response => {
                this.setState({
                    doctors : response.data
                });
            });
    }
    render() {
        let doctors = this.state.doctors.map((doctor) => { //map ทำเพื่อเอาtagไปใส่
            return (<Doctor key={doctor.id} {...doctor} />);
        });
        return (
            <div>
                <h1>{this.props.title}</h1>
                {doctors}
            </div>
        );
    }
}

