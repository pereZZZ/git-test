import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Repositor from './Repositor'
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {return {allrepos:state.allrepo}};
const mapDispatchToProps = dispatch => ( bindActionCreators({love}, dispatch) );

@connect (mapStateToProps,mapDispatchToProps)
export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div className='container'>
            <Header />
            <div className="all-repos">
                
            </div>
            <Footer />
        </div>
        )
    }
}