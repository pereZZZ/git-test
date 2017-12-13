import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';

export default class Repositor extends Component {
    constructor(props) {
        super(props);

    }

    toStory = () =>{
        
    }

    render() {
        return (
        <div className='card'>
            <h3>Name of Repositor <span style={{color:"red"}}>{this.props.item.name}</span></h3>
            <img src={this.props.item.owner.avatar_url}/>
            <p>Owner {this.props.item.owner.login}</p>
            <button onClick={this.toStory}>Like</button>
            <a href={this.props.item.html_url}>{this.props.item.html_url}</a>
        </div>
        )
    }
}