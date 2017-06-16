import React, { Component } from 'react';
import './techlist.css';

class techlist extends Component {
  var technoligies = this.props.data.map((obj,index)=> { return <li>obj</li>})  
  render() {
    return (
        <ul className="tech-list">
            {technolgies}
        </ul>
    );
  }
}

export default techlist;
