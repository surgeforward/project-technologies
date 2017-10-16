import React, { Component } from 'react';
import { Link} from 'react-router-dom'

class HeaderNav extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
        <div className="head-nav">
           <ul className="nav-items">
             <Link to="/projectlist"><li>Project List</li></Link>
             <Link to="/projectform"><li>Add Technology</li></Link>
          </ul>
          <div className="subnav"></div>
        </div>
    );
  }
}

export default HeaderNav;