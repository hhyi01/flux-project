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
    this.loggingOut = this.loggingOut.bind(this);
  }

  handleClick() {
    helpers.logout();
    helpers.redirectToFluxLogin();
    this.setState({
      loggedIn: helpers.isLoggedIn().then(result => result)
    });
  }

  loggingOut(logout) {
    if (logout) {
      // helpers.logout();
      console.log('clicked logout');
    }
    // this.setState({
    //   loggedIn: !this.state.loggedIn
    // })
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
              <Viewport loggingOut={this.loggingOut} />
            </div>
          )
        }
      </div>
    )
  }
}

export default Login;