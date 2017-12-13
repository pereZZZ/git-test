import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/common.scss';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Link} from 'react-router-dom'
import Main from './components/Main'



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='main-wrapper'>
                <Route path="/" component={Main}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('app'));