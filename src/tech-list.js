import React, { Component } from 'react';
// import './TechList.css';

class TechList extends Component {
  render() {
    console.log(this.props.data);
    let technoligies = this.props.data.map((obj,index)=> { return <li>obj</li>})  
    return (
        <ul className="tech-list">
            {this.technolgies}
        </ul>
    );
  }
}

export default TechList;
