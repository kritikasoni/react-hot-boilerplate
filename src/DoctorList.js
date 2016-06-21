import React, { Component } from 'react';
import axios from 'axios';
import Doctor from './Doctor';

export default class DoctorList extends Component {
    constructor(props,context) {
        super(props,context);
        this.state =  {
            doctors: []
        };
        this._deleteDoctor = this._deleteDoctor.bind(this);
        this._editDoctor = this._editDoctor.bind(this);
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

    _deleteDoctor(id) {
        axios
            .delete('http://localhost:1337/doctor/'+id)
            .then(response => {
                let doctors = this.state.doctors.filter(doctor => doctor.id != id);
                this.setState({doctors});
            })
            .catch(error => console.log);
    }
    _editDoctor(id) {
        this.context.router.push(`/doctors/${id}`);
    }
    render() {
        let doctors = this.state.doctors.map((doctor) => { //map ทำเพื่อเอาtagไปใส่
            return (
                <div>
                    <Doctor key={doctor.id} {...doctor} />
                    <a href={'/doctors/'+doctor.id} ><button type="button">Edit</button></a>
                    <button type="button" onClick={() => this._deleteDoctor(doctor.id)}>Delete</button>
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

