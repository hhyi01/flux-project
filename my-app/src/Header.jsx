import React from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';

const HeaderFloating = () => (
  <Segment clearing>
    <Header as='h2' floated='right'>
      <Button color='teal'>Logout</Button>
    </Header>
    <Header as='h2' floated='left'>
      FLUX
    </Header>
  </Segment>
)

export default HeaderFloating;