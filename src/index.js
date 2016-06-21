import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import DoctorList from'./DoctorList'
import DoctorUpdate from "./DoctorUpdate";
import DoctorCreate from './DoctorCreate';
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/doctors" component={DoctorList}/>
            <Route path="/doctors/create" component={DoctorCreate} />;
            <Route path="/doctors/:id" component={DoctorUpdate}/>
        </Route>
    </Router>
), document.getElementById('app'));
