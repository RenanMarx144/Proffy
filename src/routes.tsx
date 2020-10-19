import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/teacherList';
import TeacherForm from './pages/teacherForm';
import pageInit from './pages/init';

function Routes () {
    return (
        
        <BrowserRouter>
            <Route path="/" exact component={pageInit} />
            <Route path="/landing" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;
