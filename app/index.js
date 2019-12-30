import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReceiptContainer from './components/ReceiptContainer';
import ReceiptLineContainer from './components/ReceiptLineContainer';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import AddItem from './components/AddItem';

const routing = (
    <Router>
        <div>
            <Header />
            <LeftMenu />
            <Route exact path="/" component={ReceiptContainer} />
            <Route path="/receipt-line" component={ReceiptLineContainer} />
            <Route path="/inventory" component={ComingSoon} />
            <Route path="/outbound" component={ComingSoon} />
            <Route path="/add-receipt" component={AddItem} />
        </div>
        <Footer />
    </Router>
)

ReactDOM.render(routing, document.getElementById('app'))