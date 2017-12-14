import React, { Component } from 'react';
import {connect} from 'react-redux';
import Repositor from './Repositor'
import {bindActionCreators} from 'redux';
import {Route, Link, browserHistory, withRouter} from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {return {love:state.love}};

@connect (mapStateToProps,null)
export default class Love extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            love:this.props.love
        }
    }
    
    render() {
        return (
        <div className='container'>
            <div className="all-repos">
                {this.props.love.map((item,index)=>{return <Repositor key={index} item={item} />})}
            </div>
        </div>
        )
    }
}