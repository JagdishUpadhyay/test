import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default class LeftMenu extends React.Component {

  render() {
    return (
      <Menu>
        <Link to="/" id="home" className="menu-item">Receive</Link>
        <Link to="/inventory" id="inventory" className="menu-item" href="">Inventory</Link>
        <Link to="/outbound" id="outbound" className="menu-item" href="">Outbound</Link>
      </Menu>
    );
  }
}

