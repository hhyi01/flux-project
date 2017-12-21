import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import helpers from './js/helpers';

class DropdownMenu extends Component {
  state = {
    selected: 'Please select a project',
    projects: []
  }

  getProjects() {
    return helpers.getUser().listProjects().then(data => this.setState({projects: data.entities}));
  }

  makeSelection(project) {
    this.setState({
      selected: project.name
    })
  }

  componentWillMount() {
    this.getProjects();
  }

  render() {
    return (
      <Dropdown text={this.state.selected}>
        <Dropdown.Menu>
          {this.state.projects.map(project => {
            return <Dropdown.Item text={project.name} key={project.id} 
            onClick={() => this.makeSelection.bind(this)(project)}
            onClick={() => this.props.selectedProject(project.id)}
             />
          })}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropdownMenu;