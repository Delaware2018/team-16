import React, { Component } from 'react'
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Table, Button } from 'semantic-ui-react'

class ProfileHistory extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    var donationHistory = []

    // Get Donation History from firebase

    this.props.globalState.user.donations.forEach((donation, index) => {
      donationHistory.push(
        <Table.Row key={index}>
          <Table.Cell>
            {donation.date}
          </Table.Cell>
          <Table.Cell>
            {donation.name}
          </Table.Cell>
          <Table.Cell>
            {donation.amount}
          </Table.Cell>
        </Table.Row>
      )
    })

    this.state = {
      donationHistory: donationHistory
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