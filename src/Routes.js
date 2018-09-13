import React ,{Component} from 'react';
import Index from './containers/Views/index';
import {Router,Route,hashHistory} from 'react-router';

export default class Routes extends Component{
    render(){
        return (
            <Router history={hashHistory}>
            <Route component={Index} path='/'/>
            </Router>
        );
    }
}
