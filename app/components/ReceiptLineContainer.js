import React from 'react';
import DhlDataTable from './DhlDataTable';
import NavigationButtons from './NavigationButtons';
import { URLS } from '../config/config';
import { callApi } from '../utils/apiUtils';

export default class ReceiptLineContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    componentDidMount() {
        callApi(URLS.getReceiveLine).then((data) => {
            this.setState({ data: data });
        });
    }

    render() {
        return (
            <div>
                <NavigationButtons />
                {this.state.data ? <DhlDataTable data={this.state.data} /> : null}
            </div>
        )
    }
}