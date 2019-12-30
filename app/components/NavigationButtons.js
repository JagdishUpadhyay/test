import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavigationButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '10px'}}>
                <button type="button" className="btn btn-primary navigation-btn"><Link to="/">Receipt</Link></button>
                <button type="button" className="btn btn-primary navigation-btn"><Link to="/receipt-line">Receipt Line</Link></button>
            </div>
        )
    }

}