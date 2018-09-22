import React, { Component } from 'react';
import { Button, CardGroup } from 'semantic-ui-react';
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
      <div>
        <Card.Group>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./goodwillGiftcard.png' size='medium' />
              <Card.Description textAlign='center'>
                Goodwill Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./visaGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Visa Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./paypalGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Paypal Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./amazonGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Amazon Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./ebayGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Ebay Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./walmartGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center'>
                Walmart Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
      <div class="ui progress">
      <div class="bar">
        <div class="progress"></div>
      </div>
      <div class="label">Rewards Progress</div>
    </div>
    </div>
    )
  }
}

export default Rewards;