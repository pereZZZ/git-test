import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/common.scss';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Link, Switch, browserHistory, withRouter} from 'react-router-dom'
import Main from './components/Main'
import Love from './components/Love'
import Header from './components/Header';
import Footer from './components/Footer';
import Repositor from './components/Repositor';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='main-wrapper'>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/:id" component={Main}/>
                    {/* <Route path="*" component={() => <div>Page Not Found</div>}/> */}
                </Switch>
                <Route path="/love" component={Love}/>
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById('app'));