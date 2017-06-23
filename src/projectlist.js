
import React, { Component } from 'react';
import Project from './project';

class ProjectList extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.data);
  }
  render() {
    console
    let projects = this.props.data.map((obj)=> { return <Project key={obj.Name} data={obj} />})  
    return (
        <ul className="project-list">
            { projects }
        </ul>
    );
  }
}

export default ProjectList;