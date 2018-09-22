import React, { Component } from 'react';
import LoginCard from '../Components/Login/LoginCard';
import { Modal, Button, Transition } from 'semantic-ui-react';
import * as firebase from 'firebase';
import NavBar from '../Components/Home/NavBar';
import RewardsAd from '../Components/Home/RewardsAd';
import VideoGroup from '../Components/Home/VideoGroup';
import Profile from '../Pages/Profile';
import Rewards from '../Pages/Rewards';
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

    // Instantiate Videos here
    var videos = ["_XR-mlcQZMU", "ldETe_9FfVA", ""];

    this.state = {
      loggedIn: false,
      currentPage: 'Home',
      videos: videos
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

  goToPage = (page) => {
    this.setState({
      currentPage: page
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

        <Button onClick={() => { this.setState({ showMenu: !this.state.showMenu }) }}>Toggle Menu</Button>
        <NavBar logout={this.logout} goToPage={this.goToPage} showMenu={this.state.showMenu} globalState={this.props.globalState} />

        { this.state.currentPage === 'Home' &&
          <div>
            <h1>Mission Statement Goes here with Better Formating</h1>
            <RewardsAd goToPage={this.goToPage} />
            <VideoGroup videos={this.state.videos} />
          </div>
        }

        { this.state.currentPage === 'Donation' &&
          <div>
            
          </div>
        }

        { this.state.currentPage === 'Profile' &&
          <div>
            <Profile globalState={this.props.globalState} />
          </div>
        }

        { this.state.currentPage === 'Rewards' &&
          <div>
            <Rewards />
          </div>
        }

      </div>
    )
  }
}

export default Main;