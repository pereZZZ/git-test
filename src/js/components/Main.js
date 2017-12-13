import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Repositor from './Repositor'
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
// import {objmsg} from '../actions';

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
    pages = () =>{
        var body
        for(var i=0;i<this.state.allrepos.length/20;i++){
            if(i==0){
                body=<Link to={"/"+(i+1)}>{i+1}</Link>"
            }else{
                body+=<Link to={"/"+(i+1)}>{i+1}</Link>
            }
        }
        console.log(body)
        return body
    }
    render() {
        // console.log(this.state)
        return (
        <div className='container'>
            <Header />
            <div className="all-repos">
                {this.state.allrepos.length<1?<p>Loading</p>:this.state.allrepos.slice(0,20).map((item,index)=>{return <Repositor key={index} item={item}/>})}
            </div>
            {this.state.allrepos.length<1?<p>Loading</p>:this.pages()}
            <Footer />
        </div>
        )
    }
}