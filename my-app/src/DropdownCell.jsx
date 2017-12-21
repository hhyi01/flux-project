import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import helpers from './js/helpers';

class DropdownCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCell: 'Please select cell',
      dataTables: {},
      projectCells: []
    }
    this.selectCell = this.selectCell.bind(this);
    this.getDataTable = this.getDataTable.bind(this);
    this.getCells = this.getCells.bind(this);
    this.fetchCells = this.fetchCells.bind(this);
  }

  selectCell(cell) {
    this.setState({
      selectedCell: cell
    })
  }

  getDataTable() {
    const projectId = this.props.projectId;
    if (!(projectId in this.state.dataTables)) {
      const dt = helpers.getUser().getDataTable(projectId);
      let selectedProject = Object.assign({}, this.state.dataTables);
      selectedProject[projectId] = { table: dt, handlers: {}, websocketOpen: false };
      this.setState({ dataTables: selectedProject }); 
    }
    return this.state.dataTables[projectId];
  }

  getCells() {
    const projectId = this.props.projectId;
    this.getDataTable();
    // let cells = this.state.dataTables[projectId].table.getCell();
    console.log(this.state.dataTables[projectId])
    // this.setState({projectCells: cells})
  }

  fetchCells() {
    const projectId = this.props.projectId;
    return helpers.getCells(projectId);
  }

  render() {
    return (
      <Dropdown text={this.state.selectedCell}>
        <Dropdown.Menu onClick={this.getCells}>
          <Dropdown.Item text='Cells' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropdownCell;