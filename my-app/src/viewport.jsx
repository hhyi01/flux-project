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
      project: '',
      width: 700,
      height: 500
    } 
    this.selectedProject = this.selectedProject.bind(this);
    this.getProjectData = this.getProjectData.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
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

  updateDimensions() {
    this.setState({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    })
  }

  loggedOut(logout) {
    this.props.loggingOut(logout);
  }

  componentDidUpdate() {
    if (document.body.clientWidth !== this.state.width || document.body.clientHeight !== this.state.height) {
      this.updateDimensions();
    }
    viewport = new FluxViewport(document.getElementById('view'));
    viewport.setSize(this.state.width, this.state.height);
    viewport.setClearColor(0xffffff)
    if(FluxViewport.isKnownGeom(this.state.data)) {
      viewport.setGeometryEntity(this.state.data);
    }
  }

  render() {
    return (
      <div>
        <HeaderFloating loggedOut={this.loggedOut} />
          <div style={{float: 'right', paddingRight: '30px'}}>
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