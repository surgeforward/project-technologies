import React, { Component } from 'react';
// import './TechList.css';

class TechList extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.data);
    this.technologies = this.props.data.map((obj)=> { return <li key={obj}>{obj}</li>})  
  }
  render() {
    return (
        <ul className="tech-list">
            {this.technologies}
        </ul>
    );
  }
}

export default TechList;
