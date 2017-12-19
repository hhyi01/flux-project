import React, { Component } from 'react';
const FluxViewport = window.FluxViewport;

class Viewport extends Component {

  

  render() {
    return (
      <div>
        <div id='header'>
          <div id='title'>
            <h1>FLUX</h1>
            <h2>Seed Project</h2>
          </div>
          <div id='actions'>
            <div id='logout'>logout</div>
          </div>
        </div>
          <div id='content'>
            <div className='column'>
              <div id='output'>
                <div className='label'>From Flux</div>
                <div id='geometry'>
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