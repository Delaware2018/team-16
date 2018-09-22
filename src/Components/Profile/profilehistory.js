import React from 'react'
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card, Table, Button } from 'semantic-ui-react'

class ProfileHistory extends Component {
  constructor(props) {
    super(props);

    // Add constructor
  }

  render() {
    return (
      <div>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Donation History</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name='' /> 5/5/2016
        </Table.Cell>
              <Table.Cell>$50</Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                2 years ago
        </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='' /> 9/10/2016
        </Table.Cell>
              <Table.Cell>$60</Table.Cell>
              <Table.Cell textAlign='right'>2 years ago</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='' /> 9/10/2017
        </Table.Cell>
              <Table.Cell>$60</Table.Cell>
              <Table.Cell textAlign='right'>1 year ago</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='' /> 12/20/2017
        </Table.Cell>
              <Table.Cell>$75</Table.Cell>
              <Table.Cell textAlign='right'>1 year ago</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='' /> 6/12/2018
        </Table.Cell>
              <Table.Cell>$90</Table.Cell>
              <Table.Cell textAlign='right'>3 months ago</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default ProfileHistory