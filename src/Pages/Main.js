import React, { Component } from 'react';
import LoginCard from '../Components/Login/LoginCard';
import { Modal, Button, Transition } from 'semantic-ui-react';
import * as firebase from 'firebase';
import GlobalProvider, { GlobalConsumer } from '../APIs/Global.context';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  logout = () => {
    firebase.auth().signOut().then(function () {
      console.log("Signed Out");
    })

    this.props.setGlobal({
      loggedIn: false
    })
  }

  render() {
    return (
      <div>
        <Transition.Group animation='horizontal flip' duration={500}>
          {!this.props.globalState.creating &&
            <Modal dimmer='inverted' open={!this.props.globalState.loggedIn}>
              <LoginCard globalState={this.props.globalState}
                setGlobal={this.props.setGlobal} />
            </Modal>
          }
        </Transition.Group>
        <Transition.Group animation='horizontal flip' duration={500}>
          {this.props.globalState.creating &&
            <Modal dimmer='inverted' open={!this.props.globalState.loggedIn}>
              <LoginCard globalState={this.props.globalState}
                setGlobal={this.props.setGlobal} />
            </Modal>
          }
        </Transition.Group>

        <Button onClick={this.logout}>Logout</Button>
      </div>
    )
  }
}

export default Main;