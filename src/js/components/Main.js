import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Repositor from './Repositor'
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {objmsg} from '../actions';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            allrepos:[]
        }
    }
    
    componentDidMount() {
        fetch('https://api.github.com/repositories')
          .then(response => response.json())
          .then(data => {
            this.setState({allrepos:data})
          });
      }

    render() {
        console.log(this.state)
        return (
        <div className='container'>
            <Header />
            {this.state.allrepos.length<1?<p>Loading</p>:this.state.allrepos.map((item,index)=>{return <Repositor key={index} item={item}/>})}
            <Footer />
        </div>
        )
    }
}