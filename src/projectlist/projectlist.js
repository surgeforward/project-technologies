
import React, { Component } from 'react';
import Project from '../project/project';
import { connect } from 'react-redux'

class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let projects = this.props.data.map((obj)=> { return <Project key={obj.Name} data={obj} />})  
    let projects = this.props.projects.map((obj)=> { return <Project key={obj.Name} data={obj} onRemove={() => this.props.onProjectRemove(obj.id)}/>})  
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

const mapDispatchToProps = (dispatch) => {
  return {
    onProjectRemove: id=>dispatch({type: 'test', id: id})
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectList)