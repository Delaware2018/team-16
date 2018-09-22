import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'
import Donation from '../../Data/Donation'

class DonationMeter extends Component {
  constructor(props) {
    super(props);

    // Add constructor


  }

  donate = (e) => {
    var user = this.props.globalState.user;

    var donation = new Donation(this.props.globalState.username, this.state.donation);
    user.donations.push(donation);

    var userJSON = JSON.stringify(user);

    var storageRef = firebase.storage().ref().child(this.props.globalState.username + '.json');
    var userBlob = new Blob([userJSON], {type: 'application/json'});

    storageRef.put(userBlob).then((snapshot) => {
      console.log("Uploaded User with donation");
    })

  }

  setDonation = (e) => {
    this.setState({
      donation: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <Input
          action={<Button onClick={this.donate}>Donate</Button>}
          actionPosition='left'
          placeholder='Donate to Goodwill'
          onChange={this.setDonation}
          defaultValue=''
        />
      </div>
    )
  }
}

export default DonationMeter;