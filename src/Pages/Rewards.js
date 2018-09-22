import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'

class Rewards extends Component {
  constructor(props) {
    super(props);

    // Add constructor
  }

  render() {
    return (
      <div>
        <Card raised onClick={() => { }}>
          <Card.Content centered>
            <Image centered src='./goodwillGiftcard.png' size='small' />
            <Card.Description textAlign='center'>
              Goodwill Giftcard
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { }}>
          <Card.Content centered>
            <Image centered src='./chaseGiftcard.png' size='small' />
            <Card.Description textAlign='center'>
              Chase Visa Giftcard
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { }}>
          <Card.Content centered>
            <Image centered src='./paypalGiftcard.jpg' size='small' />
            <Card.Description textAlign='center'>
              Paypal Giftcard
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { }}>
          <Card.Content centered>
            <Image centered src='./amazonGiftcard.jpg' size='small' />
            <Card.Description textAlign='center'>
              Amazon Giftcard
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { }}>
          <Card.Content centered>
            <Image centered src='./ebayGiftcard.jpg' size='small' />
            <Card.Description textAlign='center'>
              Ebay Giftcard
            </Card.Description>
          </Card.Content>
        </Card>
        <Card raised onClick={() => { }}>
          <Card.Content centered>
            <Image centered src='./walmartGiftcard.jpg' size='small' />
            <Card.Description textAlign='center'>
              Walmart Giftcard
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Rewards;