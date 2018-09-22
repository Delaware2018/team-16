import React, { Component } from 'react';
import LoginCard from '../Components/Login/LoginCard';
import { Modal, Button, Transition, Menu } from 'semantic-ui-react';
import * as firebase from 'firebase';
import NavBar from '../Components/Home/NavBar';
import RewardsAd from '../Components/Home/RewardsAd';
import VideoGroup from '../Components/Home/VideoGroup';
import Profile from '../Pages/Profile';
import Rewards from '../Pages/Rewards';
import ProfileHistory from '../Components/Profile/ProfileHistory';
import DonationMeter from '../Components/Donation/DonationMeter';
class Main extends Component {

  constructor(props) {
    super(props);

    // Function to run when login is accepted
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var username = user.email;
        username = username.replace(/[$#\[\]]/, '').replace('.', '-').replace('@', '-');

        this.props.setGlobal({
          username: username
        })
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
    var videos = ["_XR-mlcQZMU", "ldETe_9FfVA", "1xjRG1NQwUY", "mF6jzj82OSA",
      "d_N2rdlv0qA", "HpbxPFBpDLo", "nvXJZdtIKnY", "Sr6-AFlwcps", "0M5Dr7fb_ac"];

    this.state = {
      loggedIn: false,
      currentPage: 'Home',
      videos: videos,
      currentProf: 'Info',
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

  buttonAway = () => {
    document.getElementById("one").style.visibility = "hidden"
  
    this.setState({ 
      showMenu: !this.state.showMenu,
     })
  }

  goToPage = (page) => {
    document.getElementById("one").style.visibility = "visible"
    this.setState({
      currentPage: page,
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn &&
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

        {this.state.loggedIn && <div>
          
        </div>}
        <Button onClick={ this.buttonAway } icon='angle double right' id="one" />
        <NavBar logout={this.logout} goToPage={this.goToPage} showMenu={this.state.showMenu} globalState={this.props.globalState} />

        {this.state.currentPage === 'Home' &&
          <div>
            <h1>Goodwill Dashboard</h1>
            <h1>Mission Statement Goes here with Better Formating</h1>
            <DonationMeter globalState={this.props.globalState} />
            <RewardsAd goToPage={this.goToPage} />
            <VideoGroup videos={this.state.videos} />
          </div>
        }

        {this.state.currentPage === 'Profile' &&
          <div>
            <Menu>
              <Menu.Item onClick={() => {this.setState({currentProf: 'Info'})}}>Info</Menu.Item>
              <Menu.Item onClick={() => { this.setState({ currentProf: 'History' }) }}>History</Menu.Item>
            </Menu>
            { this.state.currentProf === 'Info' &&
              <Profile globalState={this.props.globalState} setGlobal={this.props.setGlobal}/>
            }
            { this.state.currentProf === 'History' &&
              <ProfileHistory />
            }
            
          </div>
        }

        {this.state.currentPage === 'Rewards' &&
          <div>
            <Rewards />
          </div>
        }
      
      </div>
      
    )
  }
}

export default Main;