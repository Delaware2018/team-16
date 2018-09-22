import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'
import Donation from '../../Data/Donation'

class CustomDonation extends Component {
  constructor(props) {
    super(props);

    // Add constructor

  }

  donate = (e) => {
    var user = this.props.globalState.user;

    var donation = new Donation(this.state.name, this.state.donation);
    user.donations.push(donation);

    var userJSON = JSON.stringify(user);

    var storageRef = firebase.storage().ref().child(this.props.globalState.username + '.json');
    var userBlob = new Blob([userJSON], { type: 'application/json' });

    storageRef.put(userBlob).then((snapshot) => {
      console.log("Uploaded User with donation");
    })

    this.props.setGlobal({
      user
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
          placeholder={0}
          onChange={this.setDonation}
          defaultValue=''
        />
        <Input placeholder='Item' onChange={(e) => { this.setState({
          name: e.currentTarget.value
        })}}/>
        <Button onClick={this.donate}>Donate</Button>
      </div>
    )
  }
}

export default CustomDonation;