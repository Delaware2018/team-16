import React, { Component } from 'react';
import LoginCard from '../Components/Login/LoginCard';
import { Modal, Button, Transition, Menu, Header, Accordion, Image } from 'semantic-ui-react';
import * as firebase from 'firebase';
import NavBar from '../Components/Home/NavBar';
import RewardsAd from '../Components/Home/RewardsAd';
import VideoGroup from '../Components/Home/VideoGroup';
import Profile from '../Pages/Profile';
import Rewards from '../Pages/Rewards';
import ProfileHistory from '../Components/Profile/profilehistory';
import DonationsHistory from '../Components/Profile/DonationsHistory';
import DonationMeter from '../Components/Donation/DonationMeter';
import $ from 'jquery';
import CustomDonation from '../Components/Donation/CustomDonation';
import CustomPurchase from '../Components/Purchases/CustomPurchase';
import { Advertisement } from 'semantic-ui-react'
import Admin from './Admin';
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

            if(data.admin){
              storageRef.child('listOfUsers.json').getDownloadURL().then((url) => {
                $.getJSON(url, (data) => {
                  this.props.setGlobal({
                    adminData: data
                  })
                })
              })
            }

            this.props.setGlobal({
              user: data
            })
          })
        });

        storageRef.child('listOfUsers.json').getDownloadURL().then((url) => {
          $.getJSON(url, (data) => {
            if(!data.users.includes(user.email)){
              data.users.push(user.email)
            }

            var dataJSON = JSON.stringify(data);

            var storageRef = firebase.storage().ref().child('listOfUsers.json');
            var dataBlob = new Blob([dataJSON], { type: 'application/json' });

            storageRef.put(dataBlob).then((snapshot) => {
              console.log("Updated User List");
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
      showMenu: false,
      openMission: false
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
    const titleStyle = {
      textAlign: 'center'
    }
        
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
          
        
        <Button onClick={ this.buttonAway } icon='angle double right' id="one" />
        <NavBar logout={this.logout} goToPage={this.goToPage} showMenu={this.state.showMenu} globalState={this.props.globalState} />

        {this.state.currentPage === 'Home' &&
          <div>
           <Image src='./header_logo.png' style={{left:'47%', bottom:'30px'}}/>
            <Accordion>
              <Accordion.Title onClick={() => { this.setState({ openMission: !this.state.openMission })}}>
                <h1>Do you know our Mission Statement?</h1>
              </Accordion.Title>
              <Accordion.Content active={this.state.openMission}>
              <p>
            DONATE. SHOP. CREATE JOBS. When you donate to Goodwill, your unwanted items are sold in our retail stores and online. With the money raised from
            these sales, Goodwill can help people overcome barriers to self-sufficiency, through the Power of Work. You donate and shop,
            and Goodwill provides job training programs and employment placement services to people with disabilities, those
            who lack education or job experience, and others facing challenges to finding employment. Goodwill provides a hand up,
            not a hand out to thousands of local residents every year. Ninety cents of every dollar raised by Goodwill goes to
            support our mission of service to the community.
              <br />
              Your donations and shopping makes a positive impact on the environment too.  
              This practice offers the community an environmentally healthy alternative for the disposal of unwanted, 
              but still usable items.</p>
              </Accordion.Content>
            </Accordion>
            <Image src='./HomePicture1.jpg' size='massive' floated = 'left' border='1px solid black'/>
           <RewardsAd goToPage={this.goToPage} />
            <h4>Community Stories</h4>
            <VideoGroup videos={this.state.videos} />
          </div>
        }

        {this.state.currentPage === 'Profile' &&
          <div>
            <Menu>
              <Menu.Item onClick={() => {this.setState({currentProf: 'Info'})}}>Info</Menu.Item>
              <Menu.Item onClick={() => { this.setState({ currentProf: 'History' }) }}>Purchases</Menu.Item>
              <Menu.Item onClick={() => { this.setState({ currentProf: 'Donations' }) }}>Donations</Menu.Item>
            </Menu>
            { this.state.currentProf === 'Info' &&
              <Profile globalState={this.props.globalState} setGlobal={this.props.setGlobal}/>
            }
            { this.state.currentProf === 'History' &&
              <ProfileHistory globalState={this.props.globalState} setGlobal={this.props.setGlobal} />
            }
            { this.state.currentProf === 'Donations' &&
              <DonationsHistory setGlobal={this.props.setGlobal} globalState={this.props.globalState} />
            }
            
          </div>
        }

        {this.state.currentPage === 'Rewards' &&
          <div>
            <Rewards />
          </div>
        }

        { this.state.currentPage === 'Admin' && this.props.globalState.user.admin &&
          <div>
            <Admin setGlobal={this.props.setGlobal} globalState={this.props.globalState} />
          </div>
        }
        </div>}
      
      </div>
      
    )
  }
}

export default Main;