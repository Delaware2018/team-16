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
      <div>
        <h4>
          Go to the rewards tab to learn more about our incentives program and to have a chance to 
                        earn one of these prizes
        </h4>
      </div>
      <div>
        <Card.Group>
          <Card raised onClick={() => {this.props.goToPage('Rewards')}}>
            <Card.Content centered>
              <Image centered src='./goodwillGiftcard.png' size='medium' />
              <Card.Description textAlign='center'>
                Goodwill Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { this.props.goToPage('Rewards')}}>
            <Card.Content centered>
              <Image centered src='./visaGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Visa Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { this.props.goToPage('Rewards')}}>
            <Card.Content centered>
              <Image centered src='./paypalGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Paypal Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
      </div>
    )
  }
}

export default RewardsAd;