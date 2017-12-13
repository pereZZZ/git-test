import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';

export default class Repositor extends Component {
    constructor(props) {
        super(props);
        this.state={
            contributors:[],
            showe:false
        }

    }

    componentDidMount() {
        fetch(this.props.item.contributors_url)
            .then(response => response.json())
            .then(data => {
                this.setState({contributors:data})
            });
        // console.log(this.state.contributors)
      }

    showe = () =>{
        if(this.state.showe==false){
            this.setState({showe:true})
        }else{
            this.setState({showe:false})
        }
    }

    render() {
        console.log(this.props.item)
        return (
        <div className='card'>
            <h3>Name of Repositor <span style={{color:"red"}}>{this.props.item.name}</span></h3>
            <div className='info'>
                <img src={this.props.item.owner.avatar_url}/>
                <p>Owner {this.props.item.owner.login}</p>
                <button onClick={this.toStory}>Like</button>
            </div>
            <div className='moreinfo'>
                <button onClick={this.showe} >showe more information</button>
                {this.state.showe==true?this.state.contributors.length<1?<p>Loading</p>:
                <select>
                    {this.state.contributors.map((item,index)=>{<option></option>})}
                </select>:null}
                <br/>
                <a href={this.props.item.html_url}>Link to repositori</a>
            </div>
        </div>
        )
    }
}