import React, { Component } from 'react';
import Viewport from './Viewport';
import helpers from './js/helpers';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: helpers.isLoggedIn()
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    helpers.logout();
    helpers.redirectToFluxLogin();
    this.setState({
      loggedIn: helpers.isLoggedIn().then(result => result)
    });
  }

  componentDidMount() {
    return helpers.storeFluxUser();
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
            <div>
              <Viewport />
            </div>
          )
        }
      </div>
    )
  }
}

export default Login;