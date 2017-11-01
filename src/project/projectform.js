import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnimatedWrapper from "../AnimatedWrapper";
/// A type of Import
class ProjectFormComponent extends Component {
  constructor(props) {
    super(props)

      this.state = {
        ProjectName: '',
        Technologies: '',
        CurrentProjectTechnologies: ''
      };

     this.handleClick = ((e)=> {
      console.log('add from state %o',this.state);
       this.props.onProjectAdd({
          id:21,
          Name:this.state.ProjectName ,
          Technologies:this.state.CurrentProjectTechnologies.split(',')
        });
    }).bind(this)

     this.handleSelectChange = ((e) => {
      let currentProject = this.props.projects.find(project=> project.id == e.target.value)
      this.setState({ CurrentProjectTechnologies: currentProject ? currentProject.Technologies.join(',') : ''})
      this.setState({ ProjectName: currentProject.Name });
    }).bind(this)

     this.handleChange = ((e) => {
      this.setState({ CurrentProjectTechnologies: e.target.value });
    }).bind(this)
  }


  render() {
    console.log(this.props.projects)
    // var mapProjectsToOptions = this.props.projects.map(x=> <option key={`${x.id}:${x.Name}`} value={x.Name}>{x.Name}</option>)
    let mapProjectsToOptions = this.props.projects.map(x=> <option key={`${x.id}:${x.Name}`} value={x.id}>{x.Name}</option>)
    return (
     <div className="add_edit_project">
        <ul>
          <li><label>Technologies</label><input type="text" onChange={ this.handleChange } value={this.state.CurrentProjectTechnologies} /></li>
          <li>
            <label>Project</label>
            <select onChange={ this.handleSelectChange }>
              <option value="none" defaultValue  >none</option>
              { mapProjectsToOptions }
            </select>
          </li>
          <li><input type="submit" onClick={ this.handleClick } /></li>
        </ul>
      </div> 
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
    onProjectAdd: prj=>dispatch({type: 'ADD_PROJECT', newProject: prj})
  }
}

const ProjectForm = ProjectFormComponent
export default connect(mapStateToProps,mapDispatchToProps)(ProjectForm)