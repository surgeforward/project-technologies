import React, { Component } from 'react';
import TechList from '../techlist/techlist';

class Project extends Component {
  constructor(props) {
    super(props)

      this.state = {
        data: this.props.data,
        Name: this.props.data.Name,
        Technologies: this.props.data.Technologies
      };
    console.log(this.props.data);
  }
  render() {
    return (
        <li>
            <div className="project-name">{this.state.Name}</div>
            <TechList data={this.state.Technologies} />
              <div className="item-actions">
                <ul>
                  <li>Edit</li>
                  <li>Remove</li>
                </ul>
              </div>
            <hr className="clear" />
        </li>
    );
  }
}

export default Project;