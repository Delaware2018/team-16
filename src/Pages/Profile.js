import React, { Component } from 'react';
import { Button, GridColumn } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Grid, Image, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class Profile extends Component {
  constructor(props) {
    super(props);
    // Add constructor
  }


  updateEmailValue = (evt) => {
    var user = this.props.globalState.user;
    user.email = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateFSValue = (evt) => {
    var user = this.props.globalState.user;
    user.familySize = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateIncomeValue = (evt) => {
    var user = this.props.globalState.user;
    user.income = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updatePetsValue = (evt) => {
    var user = this.props.globalState.user;
    user.pets = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateGenderValue = (evt) => {
    var user = this.props.globalState.user;
    user.gender = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateAgeValue = (evt) => {
    var user = this.props.globalState.user;
    user.age = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateLocationValue = (evt) => {
    var user = this.props.globalState.user;
    user.location = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  save = () => {
    var user = this.props.globalState.user;

    var userJSON = JSON.stringify(user);

    var storageRef = firebase.storage().ref().child(this.props.globalState.username + '.json');
    var userBlob = new Blob([userJSON], { type: 'application/json' });

    storageRef.put(userBlob).then((snapshot) => {
      console.log("Uploaded User Information");
    })

    this.props.setGlobal({
      user
    })
  }

  render() {
    return (
      <div>

          <Image src='./matthew.png' size='medium' floated = 'left' circular />
          <Image src='./qrCode.png' size='medium' floated = 'right' />
        <div>
          {this.props.globalState.user.name}
            {/* <span>
              Email: <Input style={{ marginLeft: '35px',  }} placeholder='@' onChange={this.updateEmailValue}/>
            </span>
            <br/>
             <span>
              Family Size: <Input placeholder={this.props.globalState.user.familySize} onChange={this.updateFSValue}/>
            </span>
            <br/>
            <span>
              Income: <Input style={{ marginLeft: '23px',  }} placeholder={this.props.globalState.user.income} onChange={this.updateIncomeValue}/>
            </span>
            <br/>
            <span>
              Pets: <Input style={{ marginLeft: '41px',  }} placeholder={this.props.globalState.user.pets} onChange={this.updatePetsValue}/>
            </span>
            <br/>
            <span>
              Gender: <Input style={{ marginLeft: '40px',  }} placeholder={this.props.globalState.user.gender} onChange={this.updateGenderValue}/>
            </span>
            <br/>
            <span>
              Age: <Input style={{ marginLeft: '40px',  }} placeholder={this.props.globalState.user.age} onChange={this.updateAgeValue}/>
            </span>
            <br/>
            <span>
              Location: <Input style={{ marginLeft: '40px',  }} placeholder={this.props.globalState.user.location} onChange={this.updateLocationValue}/>
            </span>
            <br/> */}
            <table style = {{width: '25%'}}>
            <tr>
              <th>Email:</th>
                <td><Input value={this.props.globalState.user.email} onChange={this.updateEmailValue}/></td>
            </tr>
            <tr>
              <th>Family Size:</th>
              <td><Input value={this.props.globalState.user.familySize} onChange={this.updateFSValue}/></td>
            </tr>
            <tr>
              <th>Income:</th>
              <td><Input value={this.props.globalState.user.income} onChange={this.updateIncomeValue}/></td>
            </tr>
            <tr>
              <th>Pets:</th>
              <td><Input value={this.props.globalState.user.pets} onChange={this.updatePetsValue}/></td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td><Input value={this.props.globalState.user.gender} onChange={this.updateGenderValue}/></td>
            </tr>
            <tr>
              <th>Age:</th>
              <td><Input value={this.props.globalState.user.age} onChange={this.updateAgeValue}/></td>
            </tr>
            <tr>
              <th>Location:</th>
              <td><Input value={this.props.globalState.user.location} onChange={this.updateLocationValue}/></td>
            </tr>   
          </table>
          <Button onClick={this.save} color='green'>Save</Button>
          </div>
      </div>
    )
  }
}

export default Profile;