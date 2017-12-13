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
                <Link to={"/repositories"}>All repositories</Link>
                <Link to={"/love"}>love</Link>
                <Link to={"/abaut"}>abaut repositories</Link>
            </header>
        )
    }
}