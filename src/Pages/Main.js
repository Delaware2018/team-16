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
import $ from 'jquery';
import CustomDonation from '../Components/Donation/CustomDonation';
import CustomPurchase from '../Components/Purchases/CustomPurchase';
import PurchaseMeter from '../Components/Purchases/PurchaseMeter';
class Main extends Component {

  constructor(props) {
    super(props);

    // Function to run when login is accepted
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var username = user.email;
        username = username.replace(/[$#\[\]]/, '').replace('.', '-').replace('@', '-');

        var storageRef = firebase.storage().ref();

        storageRef.child(username + '.json').getDownloadURL().then((url) => {
          $.getJSON(url, (data) =>{
            data.email = user.email;
            this.props.setGlobal({
              user: data
            })
          })
        });

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
            <DonationMeter setGlobal={this.props.setGlobal} globalState={this.props.globalState} />
            <CustomDonation setGlobal={this.props.setGlobal} globalState={this.props.globalState} />
            <PurchaseMeter setGlobal={this.props.setGlobal} globalState={this.props.globalState} />
            <CustomPurchase setGlobal={this.props.setGlobal} globalState={this.props.globalState} />
            <h1>DONATE. SHOP. CREATE JOBS.
              When you donate to Goodwill, your unwanted items are sold in our retail stores and online. With the money raised from 
              these sales, Goodwill can help people overcome barriers to self-sufficiency, through the Power of Work. You donate and shop, 
              and Goodwill provides job training programs and employment placement services to people with disabilities, those 
              who lack education or job experience, and others facing challenges to finding employment. Goodwill provides a hand up,
              not a hand out to thousands of local residents every year. Ninety cents of every dollar raised by Goodwill goes to 
              support our mission of service to the community.
              <br />
              Your donations and shopping makes a positive impact on the environment too.  
              This practice offers the community an environmentally healthy alternative for the disposal of unwanted, 
              but still usable items.</h1>
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
              <ProfileHistory globalState={this.props.globalState} />
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