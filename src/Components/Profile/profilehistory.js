import React, { Component } from 'react'
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Table, Button } from 'semantic-ui-react'

class ProfileHistory extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    var donationHistory = []

    // Get Donation History from firebase

    var temp = {}
    var history = [];

    // How to get todays date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    // Copy here (You'll need to make a new temp variable for each one or overwrite it)
    temp.date = dd + '/' + mm + '/' + yyyy;
    temp.name = 'Baseball Bat';
    temp.amount = '$10'
    history.push(temp);
    // End here
    temp.date = '04/19/2018';
    temp.name = 'Lamp';
    temp.amount = '$15'
    history.push(temp);
    temp.date = '07/04/2017';
    temp.name = 'Soccer Ball';
    temp.amount = '$5'
    history.push(temp);
    temp.date = '01/30/2015';
    temp.name = 'Mens T-Shirt';
    temp.amount = '$8'
    history.push(temp);
    temp.date = '11/25/2012';
    temp.name = 'Jump Rope';
    temp.amount = '$3'
    history.push(temp);

    history.forEach((donation, index) => {
      donationHistory.push(
        <Table.Row key={index}>
          <Table.Cell>
            {temp.date}
          </Table.Cell>
          <Table.Cell>
            {temp.name}
          </Table.Cell>
          <Table.Cell>
            {temp.amount}
          </Table.Cell>
        </Table.Row>
      )
    })

    this.state = {
      donationHistory: donationHistory,
      history: history
    }
  }

  render() {
    return (
      <div>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Item Name</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.donationHistory}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default ProfileHistory