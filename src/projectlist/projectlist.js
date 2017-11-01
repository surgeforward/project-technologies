
import React, { Component } from 'react';
import Project from '../project/project';
import { connect } from 'react-redux'
import AnimatedWrapper from "../AnimatedWrapper";

class ProjectListComponent extends Component {
  constructor(props) {
    console.log('Component props %o',props);
    super(props)
    this.projects = ()=> this.props.projects.map((obj)=> { return <Project key={obj.id} data={obj} onRemove={() => this.props.onProjectRemove(obj.id)}/>})  
  }


  render() {
    return (
        <ul className="project-list">
            { this.projects() }
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

const mapDispatchToProps = (dispatch) => {
  return {
    onProjectRemove: id=>{
      console.log("removing");
      dispatch({type: 'REMOVE_PROJECT', id: id})
    }
  }
  
}

const ProjectList = ProjectListComponent
export default connect(mapStateToProps,mapDispatchToProps)(ProjectList)