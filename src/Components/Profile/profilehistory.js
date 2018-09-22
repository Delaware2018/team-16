import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleCelledStriped = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>Donation History</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Icon name='' /> 5/5/2017
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          10 hours ago
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name= '' /> 9/10/2017
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='' /> 9/10/2018
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='' /> $100
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='' /> 
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleCelledStriped