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
        <Card.Group>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./goodwillGiftcard.png' size='medium' />
              <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                Goodwill Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./visaGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                Visa Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./paypalGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
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
              <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                Ebay Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
          <Card raised onClick={() => { }}>
            <Card.Content centered>
              <Image centered src='./walmartGiftcard.jpg' size='medium' />
              <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                Walmart Giftcard
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}

export default Rewards;