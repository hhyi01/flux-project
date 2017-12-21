import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import helpers from './js/helpers';

class DropdownCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCell: 'Please select cell',
      projectId: this.props.projectId,
      dataTables: {}
    }
  }

  getProjects() {
    return helpers.getUser().listProjects().then(data => this.setState({projects: data.entities}));
  }

  makeSelection(projectName) {
    this.setState({
      selected: projectName
    })
  }

  // getDataTable(project) {
  //   if (!(project.id in this.state.dataTables)) {
  //     const dt = helpers.getUser().getDataTable(project.id);
  //     this.setState({ dataTables[project.id]: { table: dt, handlers: {}, websocketOpen: false } })
  //   }
  //   return this.state.dataTables[project.id];
  // }

  // getCells(project) {
  //   return helpers.getDataTable(project).table.listCells().then(cells => console.log(cells)));
  // }

  componentWillMount() {
    this.getProjects();
  }

  render() {
    return (
      <Dropdown text={this.state.selectedCell}>
        <Dropdown.Menu>
          <Dropdown.Item text='nothing yet' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropdownCell;