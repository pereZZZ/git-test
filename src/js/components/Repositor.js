import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';

export default class Repositor extends Component {
    constructor(props) {
        super(props);
        this.state={
            contributors:[]
        }

    }

    componentDidMount() {
        fetch(this.props.item.contributors_url)
          .then(response => response.json())
          .then(data => {
            this.setState({contributors:data})
          });
        //   console.log(this.state.contributors)
      }

    render() {
        return (
        <div className='card'>
            <h3>Name of Repositor <span style={{color:"red"}}>{this.props.item.name}</span></h3>
            <div className='info'>
                <img src={this.props.item.owner.avatar_url}/>
                <p>Owner {this.props.item.owner.login}</p>
                <button onClick={this.toStory}>Like</button>
            </div>
            <div className='moreinfo'>
                {this.state.contributors.length<1?<p>Loading</p>:
                <select>
                    {this.state.contributors.map((item,index)=>{<option></option>})}
                </select>}
                <a href={this.props.item.html_url}>Link to repositori</a>
            </div>
        </div>
        )
    }
}