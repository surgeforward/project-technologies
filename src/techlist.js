import React, { Component } from 'react';
// import './TechList.css';

class TechList extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.data);
  }
  render() {
    let technologies = this.props.data.map((obj)=> { return <li key={obj}>{obj}</li>})  
    return (
        <ul className="tech-list">
            {technologies}
        </ul>
    );
  }
}

export default TechList;
