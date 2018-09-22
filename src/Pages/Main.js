import React, { Component } from 'react';
import LoginCard from '../Components/Login/LoginCard';
import { Modal, Button, Transition } from 'semantic-ui-react';
import * as firebase from 'firebase';
import NavBar from '../Components/Home/NavBar';
import RewardsAd from '../Components/Home/RewardsAd';
class Main extends Component {

  constructor(props) {
    super(props);
    
    // Function to run when login is accepted
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })

    this.state = {
      loggedIn: false,
      showMenu: false
    }
  }

  logout = () => {
    firebase.auth().signOut().then(function () {
      console.log("Signed Out");
    })

    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <div>
        { !this.state.loggedIn &&
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
          </div>
        }

        <Button onClick={() => {this.setState({showMenu: !this.state.showMenu})}}>Toggle Menu</Button>

        <RewardsAd />
        
        <NavBar showMenu={this.state.showMenu} globalState={this.props.globalState} />

      </div>
    )
  }
}

export default Main;