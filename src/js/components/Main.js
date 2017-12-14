import React, { Component } from 'react';
import {connect} from 'react-redux';
import Repositor from './Repositor'
import {bindActionCreators} from 'redux';
import {Route, Link, withRouter} from 'react-router-dom';
import {allrepo} from '../actions';

export default class Main extends React.Component {
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

    sortup = () =>{
        this.setState({allrepos: this.state.allrepos.sort((item,nextItem)=>{return(item.id < nextItem.id) ? 1 : (item.id > nextItem.id) ? -1 : 0})})
    }
    sortdown = () =>{
        this.setState({allrepos: this.state.allrepos.sort((item,nextItem)=>{return(item.id < nextItem.id) ? -1 : (item.id > nextItem.id) ? 1 : 0})})
        
    }
    scrolling = () => {
        window.scrollTo(0,0);
    }

    pages = () =>{
        var body=[]
        for(var i=0;i<this.state.allrepos.length/20;i++){
            if(i==0){
                body[i]=<Link key={i} to={"/"} onClick={this.scrolling}>{i+1}</Link>
            }else{
                body[i]=<Link key={i} to={"/"+(i+1)} onClick={this.scrolling}>{i+1}</Link>
            }
        }
        return body
    }

    ifpage = (item,index) =>{
        if(this.props.match.url=="/love"){return null}else{
        if(this.props.match.url=="/"){
            if(index==0){
                
            }else{
                return item
            }
        }else if(this.props.match.params.id != (index+1)){
            return item
        }
    }
    }

    render() {
        console.log(this.props)
        return (
        <div className='container'>
            {this.props.match.url=="/love"?null:<div className="sortdiv"><p className="sortp">Sort: </p><button onClick={this.sortup} className="sort">up</button><button onClick={this.sortdown} className="sort">down</button></div>}
            <br/>
            <div className="all-repos">
                {this.state.allrepos.length<1?<p>Loading</p>:this.state.allrepos.slice(0+(this.props.match.url=="/"?0:(this.props.match.params.id-1)*20),20+(this.props.match.url=="/"?0:(this.props.match.params.id-1)*20)).map((item,index)=>{return <Repositor key={index} item={item}/>})}
            </div>
            <div className="pages">
                {this.state.allrepos.length<1?<p>Loading</p>:this.pages().map((item,index)=>{return this.ifpage(item,index)})}
            </div>
        </div>
        )
    }
}