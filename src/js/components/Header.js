import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <header>
                <h1>Git API</h1>
                <div className="pagetogo">
                    <Link to={"/love"}>Like</Link>
                </div>
                <div className="pagetogo">
                    <Link to={"/"}>All repositories</Link>
                </div>
                <hr/>
            </header>
        )
    }
}