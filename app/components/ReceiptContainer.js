import React from 'react';
import DhlDataTable from './DhlDataTable';
import NavigationButtons from './NavigationButtons';
import { Link } from "react-router-dom";
import { URLS } from '../config/config';
import { callApi } from '../utils/apiUtils';
// import Loader from './Loader';

export default class ReceiptContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: null, formDefinition: null };
    }

    componentDidMount() {
        callApi(URLS.getReceive).then((data) => {
            this.setState({ data: data.data, formDefinition: data.form_definition });
        });
    }

    render() {
        console.log(this.state.formDefinition);
        return (
            <div>
                { this.state.data ? <div>
                <NavigationButtons />
                <div style={{ float: 'right', marginRight: '20px' }}>
                <Link to="/add-receipt" params= {{ formDefinition: this.state.formDefinition }}><span className="circle plus"></span></Link>                
                </div>
                 <DhlDataTable data={this.state.data} /> 
                 </div> : null }
            </div>
        )
    }
}