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
  }

  selectedProject(projectId) {
    this.setState({
      project: projectId
    })
  }

  componentDidMount() {
    // attach the viewport to the #div view
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
            <DropdownCell projectId={this.state.project} />
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