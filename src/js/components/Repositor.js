import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link, browserHistory, withRouter} from 'react-router-dom';
import {love, dellove} from '../actions';
const mapDispatchToProps = dispatch => ( bindActionCreators({love, dellove}, dispatch) );
const mapStateToProps = (state, ownProps) => {return {url:ownProps.match, inlove:state.love ,check:ownProps.check}};

@connect (mapStateToProps,mapDispatchToProps)
class Repositor extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            contributors:[],
            showe:false,
            repit:false,
        }

    }

    addtolove = ()=>{
        this.props.inlove.map(item=>{
            if(item.id == this.props.item.id){
                this.state.repit=true;
            }
        });
        if(this.state.repit == false){
            this.props.love(this.props.item);
        }
        this.state.repit=false;
    }

    componentWillMount(){
        this.setState({showe:false})
    }

    componentDidMount() {
        

            // if(this.props.check == "false"){
            //     this.setState({check:"false"})
            // }
            // if(this.props.check == "true"){
            //     this.setState({check:"false"})
            // }
    }

    delfromlove = () =>{
        this.props.dellove(this.props.item)
    }

    showe = () =>{
        fetch(this.props.contr)
        .then(response => response.json())
        .then(data => {
            this.setState({contributors:data})
        });
        // console.log(this.state.contributors)
        if(this.state.showe==false){
            this.setState({showe:true})
        }else{
            this.setState({showe:false})
        }
    }

    render() {
        console.log(this.props)
        return (
        <div className='card'>
            <h3>Name of Repositor: <span style={{color:"red"}}>{this.props.item.name}</span></h3>
            <hr/>
            <div className='info'>
                <img src={this.props.item.owner.avatar_url}/>
                <p>Owner: {this.props.item.owner.login}</p>
                <a href={this.props.item.html_url}>Link to repositori</a>
                <p>Description: {this.props.item.description}</p>
                <br/>
                {this.props.match.url=="/love"?<button onClick={this.delfromlove}>disLike</button>:<button onClick={this.addtolove}>Like</button>}
            </div>
            <div className='moreinfo'>
            {this.state.showe==true?this.state.contributors.length<1?<p>Loading</p>:<div className="moreinfodiv"><h3>Contributors info</h3>
                {this.state.contributors.map((item,index)=>{return <div key={index} className="contributors"><img src={item.avatar_url}/><p>Contributors: {item.login}</p><a href={item.html_url}>Link to contributors</a></div>})}</div>:null}
                {this.state.contributors.length<0?null:<button onClick={this.showe} className="showe">showe more information</button>}
            </div>
        </div>
        )
    }
}

export default withRouter(Repositor)