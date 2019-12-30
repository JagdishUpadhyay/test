import React, { Component } from 'react';
const $ = require('jquery');
const dt = require('datatables.net');

export default class DhlDataTable extends Component {
    constructor(props) {
        super(props);
    }


    getHeaders(response) {
        let columns = [];
        columns.push({
            'targets': 0,
            'searchable': false,
            'orderable': false,
            'className': 'dt-body-center',
            'render': function (data, type, full, meta) {
                return '<input type="checkbox" class="checkthis checkbox-single" data-id="' + full['deviceIp'] + '" data-scope="devices" data-type="device" data-api-delete="sxafaApiDelete"><span class="checkbox-ui">';
            }
        });

        for (let key in response) {
            let obj = { "sDefaultContent": "", data: key, title: key };
            columns.push(obj);
        }
        return columns;
    }

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.DataTable = dt;
        this.$el.DataTable({
            "dom": 'frtlip',
            "destroy": true,
            "pagingType": "full_numbers",
            language: {
                paginate: {
                    next: '&#x3e', // or '→'
                    previous: '&#x3c', // or '←'
                    first: '&#x3c&#x3c', // or '→'
                    last: '&#x3e&#x3e' // or '←'
                }
            },
            lengthChange: false,
            data: this.props.data,
            columns: this.getHeaders(this.props.data[0]),
            order: [[1, 'desc']]

        });
    }

    componentWillUnmount() {
        $('.display')
            .find('table')
            .DataTable()
            .destroy(true);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '50px' }}>
                <table className="display" width="100%" id="dataTable" ref={el => this.el = el} />
            </div>
        );
    }
}