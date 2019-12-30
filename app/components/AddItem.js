import React, { Component } from 'react';
import DateTime from './DateTime';

export default class AddItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <DateTime />
        )
    }
}