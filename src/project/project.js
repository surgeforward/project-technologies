import React, { Component } from 'react';
import TechList from '../techlist/techlist';
import { Link} from 'react-router-dom'

class Project extends Component {
  constructor(props) {
    super(props)

      this.state = {
        data: this.props.data,
        Name: this.props.data.Name,
        Technologies: this.props.data.Technologies
      };
    this.Technologies= this.props.data.Technologies
  }
  render() {
    return (
        <li>
            <div className="project-name">{this.state.Name}</div>
            <TechList data={this.Technologies} />
              <div className="item-actions">
                <ul>
                  <li><Link to={"/editproject/" + this.state.data.id}>Edit</Link></li>
                  <li onClick={() => this.props.onRemove() }>Remove</li>
                </ul>
              </div>
            <hr className="clear" />
        </li>
    );
  }
}

export default Project;