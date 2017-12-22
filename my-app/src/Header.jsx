import React, {Component} from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import helpers from './js/helpers';

class HeaderFloating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: helpers.isLoggedIn()
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.loggedOut(true);
  }

  render() {
    return (
      <Segment clearing>
        <Header as='h2' floated='right'>
          <Button color='teal' onClick={this.handleLogout} >Logout</Button>
        </Header>
        <Header as='h2' floated='left'>
          FLUX
        </Header>
      </Segment>
    )
  }
}

export default HeaderFloating;