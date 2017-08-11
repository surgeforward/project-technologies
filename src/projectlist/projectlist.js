
import React, { Component } from 'react';
import Project from '../project/project';
import { connect } from 'react-redux'

class ProjectList extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.data);
  }
  render() {
    // let projects = this.props.data.map((obj)=> { return <Project key={obj.Name} data={obj} />})  
    let projects = this.props.projects.map((obj)=> { return <Project key={obj.Name} data={obj} />})  
    return (
        <ul className="project-list">
            { projects }
        </ul>
    );
  }
}

const getProjectsList = (projects)=> {
  return projects;
}

const mapStateToProps = (state) => {
  return {
    projects: getProjectsList(state.projects)
  }
}

export default connect(mapStateToProps)(ProjectList)