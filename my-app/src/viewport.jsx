import React, { Component } from 'react';
import HeaderFloating from './Header';
import box_data from './js/box.js';
import DropdownMenu from './Dropdown';
import DropdownCell from './DropdownCell';
const FluxViewport = window.FluxViewport;
let viewport;

class Viewport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: box_data,
      project: ''
    } 
    this.selectedProject = this.selectedProject.bind(this);
    this.getProjectData = this.getProjectData.bind(this);
  }

  selectedProject(projectId) {
    this.setState({
      project: projectId
    })
  }

  getProjectData(projectData) {
    this.setState({
      data: projectData
    })
  }

  componentDidUpdate() {
    viewport = new FluxViewport(document.getElementById('view'));
    viewport.setSize(800, 700);
    viewport.setClearColor(0xffffff)
    if(FluxViewport.isKnownGeom(this.state.data)) {
      viewport.setGeometryEntity(this.state.data);
    }
  }

  render() {
    return (
      <div>
        <HeaderFloating />
          <div style={{float: 'right'}}>
            <DropdownMenu selectedProject={this.selectedProject} />
          </div>
          <div style={{textAlign: 'center'}}>
            <DropdownCell projectId={this.state.project} getProjectData={this.getProjectData}/>
          </div>
          <div id='content'>
            <div className='column'>
              <div id='output'>
                <div className='label'>From Flux</div>
                <div id='geometry' style={{display: 'flex'}}>
                  <div id='view'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Viewport;