import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <footer className='footer row'>
                <h1>Create by Viktor Romanenko</h1>
            </footer>
        )
    }
}