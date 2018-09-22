import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'
import Purchase from '../../Data/Purchase'

class PurchaseMeter extends Component {
  constructor(props) {
    super(props);

    // Add constructor


  }

  donate = (e) => {
    var user = this.props.globalState.user;

    var purchase = new Purchase('Online Donation', this.state.donation);
    user.purchases.push(purchase);

    var userJSON = JSON.stringify(user);

    var storageRef = firebase.storage().ref().child(this.props.globalState.username + '.json');
    var userBlob = new Blob([userJSON], {type: 'application/json'});

    storageRef.put(userBlob).then((snapshot) => {
      console.log("Uploaded User with donation");
    })

    this.props.setGlobal({
      user
    })

  }

  setDonation = (e) => {
    this.setState({
      purchase: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <Input
          action={<Button onClick={this.donate}>Input Purchase</Button>}
          actionPosition='left'
          placeholder='Donate to Goodwill'
          onChange={this.setDonation}
          defaultValue=''
        />
      </div>
    )
  }
}

export default PurchaseMeter;