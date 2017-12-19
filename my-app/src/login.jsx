import React, { Component } from 'react';
import helpers from './js/helpers';
import Viewport from './viewport';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: helpers.isLoggedIn()
    }
    this.handleClick = this.handleClick.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  handleClick() {
    helpers.logout();
    helpers.redirectToFluxLogin();
  }

  initialize() {
    helpers.storeFluxUser();
    this.setState({
      loggedIn: helpers.isLoggedIn()
    });
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn ?
           (
            <div id='login' style={{display: 'flex', flexDirection: 'row'}}>
              <div className='button' onClick={this.handleClick}>Login</div>
            </div>
          ) : (
            <div onChange={this.initialize}>
              <Viewport />
            </div>
          )
        }
      </div>
    )
  }
}

export default Login;