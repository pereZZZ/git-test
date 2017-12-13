import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {love} from '../actions';
const mapStateToProps = (state, ownProps) => {return {allrepos:state.allrepo}};
const mapDispatchToProps = dispatch => ( bindActionCreators({love}, dispatch) );

@connect (mapStateToProps,mapDispatchToProps)
export default class Repositor extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            allrepos:this.props.allrepos,
            contributors:[],
            showe:false
        }

    }

    addtolove = ()=>{
        this.props.love(this.props.item);
    }
    componentDidMount() {
        fetch(this.props.item.contributors_url)
            .then(response => response.json())
            .then(data => {
                this.setState({contributors:data})
            });
      }

    showe = () =>{
        if(this.state.showe==false){
            this.setState({showe:true})
        }else{
            this.setState({showe:false})
        }
    }

    render() {
        // console.log(this.state.allrepos)
        return (
        <div className='card'>
            <h3>Name of Repositor <span style={{color:"red"}}>{this.props.item.name}</span></h3>
            <hr/>
            <div className='info'>
                <img src={this.props.item.owner.avatar_url}/>
                <p>Owner {this.props.item.owner.login}</p>
                <a href={this.props.item.html_url}>Link to repositori</a>
                <br/>
                <button onClick={this.addtolove}>Like</button>
            </div>
            <div className='moreinfo'>
                {this.state.showe==true?this.state.contributors.length<1?<p>Loading</p>:
                <select>
                    {this.state.contributors.map((item,index)=>{<div></div>})}
                </select>:null}
                <button onClick={this.showe} className="showemore">showe more information</button>
            </div>
        </div>
        )
    }
}