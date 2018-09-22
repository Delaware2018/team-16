import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'

class RewardsAd extends Component {
  constructor(props) {
    super(props);

    // Add constructor
  }

  render() {
    return (
      <div>
        <Card raised onClick={() => {this.props.goToPage('Rewards')}}>
          <Card.Content centered>
            <Image centered src='./goodwillLogo.png' size='small' />
            <Card.Description textAlign='center'>
              This is the Description
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { this.props.goToPage('Rewards')}}>
          <Card.Content centered>
            <Image centered src='./goodwillLogo.png' size='small' />
            <Card.Description textAlign='center'>
              This is the Description
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { this.props.goToPage('Rewards')}}>
          <Card.Content centered>
            <Image centered src='./goodwillLogo.png' size='small' />
            <Card.Description textAlign='center'>
              This is the Description
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default RewardsAd;