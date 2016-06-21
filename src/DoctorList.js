import React, { Component } from 'react';
import axios from 'axios';
import Doctor from './Doctor';

export default class DoctorList extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            doctors: []
        }
        this._deleteDoctor = this._deleteDoctor.bind(this);
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

    _deleteDoctor() {
        axios
            .delete('http://localhost:1337/doctor/2')
            .then(response => console.log)
            .catch(error => console.log);
    }
    render() {
        let doctors = this.state.doctors.map((doctor) => { //map ทำเพื่อเอาtagไปใส่
            return (
                <div>
                    <Doctor key={doctor.id} {...doctor} />
                    <button type="button" onClick="">Edit</button>
                    <button type="button" onClick={this._deleteDoctor}>Delete</button>
                </div>
            );
        });
        return (
            <div>
                <h1>{this.props.title}</h1>
                {doctors}
            </div>
        );
    }


}

