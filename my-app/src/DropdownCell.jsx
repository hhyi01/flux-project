import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import helpers from './js/helpers';

class DropdownCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCell: 'Please select cell',
      cellId: '',
      dataTables: {},
      projectCells: [],
      projectData: ''
    }
    this.selectCell = this.selectCell.bind(this);
    this.getDataTable = this.getDataTable.bind(this);
    this.getCells = this.getCells.bind(this);
    this.fetchCells = this.fetchCells.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  selectCell(cell) {
    this.setState({
      selectedCell: cell.label,
      cellId: cell.id
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
    this.state.dataTables[projectId].table.listCells()
    .then(cells => this.setState({projectCells: cells.entities }))
  }

  fetchCells() {
    const projectId = this.props.projectId;
    return helpers.getCells(projectId);
  }

  getValue() {
    const projectId = this.props.projectId;
    const cellId = this.state.cellId;
    return this.state.dataTables[projectId].table.getCell(cellId).fetch();
  }

  componentDidUpdate(prevProps, prevState) {
    this.getDataTable();
    const projectId = this.props.projectId;
    if(!this.state.dataTables[projectId]) {
      setTimeout(() => {
        this.getCells();
      }, 1000);
    }
    if(prevState.cellId !== this.state.cellId) {
      this.getValue().then(data => {
        this.setState({ projectData: data.value })
      });
    }
    if(JSON.stringify(prevState.projectData) !== JSON.stringify(this.state.projectData)) {
      this.props.getProjectData(this.state.projectData);
    }
  }

  render() {
    return (
      <Dropdown text={this.state.selectedCell}>
        <Dropdown.Menu>
          {this.state.projectCells.map(cell => {
            return <Dropdown.Item text={cell.label} key={cell.id} 
            onClick={() => (this.selectCell(cell))}
            />
          })}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default DropdownCell;