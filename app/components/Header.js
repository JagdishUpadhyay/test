import React, { Component } from 'react';
import RightDropdown from './RightDropdown';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default" style={{ backgroundColor: '#fc0' }}>
                <div className="navbar-header">
                <a className="navbar-brand" rel="home" href="#">
                    <img style={{ maxWidth: "100px", marginLeft: "30px" }}
                        src="https://www.dhl.com/img/meta/dhl_logo.gif" />
                    <span className="navbar-text">
                    <span style={{ color: 'red', fontWeight: 'bold'}}>Smart</span>
                    <span style={{ color: 'black', fontWeight: 'bold'}}>Web</span>
                </span>    
                </a>
                
                </div>
                <div>
                    <RightDropdown />
                </div>
            </nav>
        )
    }
}