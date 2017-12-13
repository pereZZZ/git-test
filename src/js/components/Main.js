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

    scrolling = () => {
        window.scrollTo(0,0);
    }

    pages = () =>{
        var body=[]
        for(var i=0;i<this.state.allrepos.length/20;i++){
            if(i==0){
                body[i]=<Link key={i} to={"/"} onClick={this.scrolling}>{i+1}</Link>
                console.log()
            }else{
                body[i]=<Link key={i} to={"/"+(i+1)} onClick={this.scrolling}>{i+1}</Link>
            }
        }
        return body
    }

    ifpage = (item,index) =>{
        if(this.props.match.url=="/"){
            if(index==0){
                
            }else{
                return item
            }
        }else if(this.props.match.params.id != (index+1)){
            return item
        }
    }

    render() {
        return (
        <div className='container'>
            <Header />
            <div className="all-repos">
                {this.state.allrepos.length<1?<p>Loading</p>:this.state.allrepos.slice(0+(this.props.match.url=="/"?0:(this.props.match.params.id-1)*20),20+(this.props.match.url=="/"?0:(this.props.match.params.id-1)*20)).map((item,index)=>{return <Repositor key={index} item={item}/>})}
            </div>
            {this.state.allrepos.length<1?<p>Loading</p>:this.pages().map((item,index)=>{return this.ifpage(item,index)})}
            <Footer />
        </div>
        )
    }
}