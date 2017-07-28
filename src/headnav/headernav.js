import React, { Component } from 'react';

class HeaderNav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="head-nav">
           <ul className="nav-items">
             <li>Project List</li>
             <li>Add Technology</li>
          </ul>
          <div className="subnav"></div>
        </div>
    );
  }
}

export default HeaderNav;