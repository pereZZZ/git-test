import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/common.scss';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Link} from 'react-router-dom'
import Main from './components/Main'
import Love from './components/Love'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='main-wrapper'>
                <Route exact path="/" component={Main}/>
                <Route path="/:id" component={Main}/>
                <Route path="/love" component={Love}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('app'));