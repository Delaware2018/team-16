import React, { Component } from 'react'
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Table, Button } from 'semantic-ui-react'

class ProfileHistory extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    var donationHistory = []
    var purchaseHistory = []

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
    console.log(this.props.globalState.user)
    this.props.globalState.user.purchases.forEach((purchase, index) => {
      purchaseHistory.push(
        <Table.Row key={index}>
          <Table.Cell>
            {purchase.date}
          </Table.Cell>
          <Table.Cell>
            {purchase.name}
          </Table.Cell>
          <Table.Cell>
            {purchase.amount}
          </Table.Cell>
        </Table.Row>
      )
    })

    this.state = {
      donationHistory: donationHistory,
      purchaseHistory: purchaseHistory
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
            {this.state.purchaseHistory}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default ProfileHistory;