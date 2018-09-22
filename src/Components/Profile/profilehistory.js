import React from 'react'
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Table, Button } from 'semantic-ui-react'

class ProfileHistory extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    var donationHistory = []

    // Get Donation History from firebase

    var temp = {}

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
    // End here

    history.push(temp);

    history.forEach((donation) => {
      donationHistory.push(
        <Table.Row>
          <Table.Cell>
            temp.date
          </Table.Cell>
          <Table.Cell>
            temp.name
          </Table.Cell>
          <Table.Cell>
            temp.amount
          </Table.Cell>
        </Table.Row>>
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
            {this.state.history}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default ProfileHistory