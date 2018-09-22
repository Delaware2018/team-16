import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'

class DonationMeter extends Component {
  constructor(props) {
    super(props);

    // Add constructor


  }

  donate = () => {
    console.log("WOW")
  }

  render() {
    return (
      <div>
        <Input
          action={<Button onClick={this.donate}>Donate</Button>}
          actionPosition='left'
          placeholder='Donate to Goodwill'
          defaultValue=''
        />
      </div>
    )
  }
}

export default DonationMeter;