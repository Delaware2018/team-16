import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class Profile extends Component {
  constructor(props) {
    super(props);
    // Add constructor
  }


  updateEmailValue (evt) {
    var user = this.props.globalState.user;
    user.email = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateFSValue (evt) {
    var user = this.props.globalState.user;
    user.familySize = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateIncomeValue (evt) {
    var user = this.props.globalState.user;
    user.income = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updatePetsValue (evt) {
    var user = this.props.globalState.user;
    user.pets = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateGenderValue (evt) {
    var user = this.props.globalState.user;
    user.gender = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateAgeValue (evt) {
    var user = this.props.globalState.user;
    user.age = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  updateLocationValue (evt) {
    var user = this.props.globalState.user;
    user.location = evt.target.value;
    this.props.setGlobal({
      user: user
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header>{this.props.globalState.user.name}</Card.Header>
          <Card.Description>
            <span>
              Email: <Input placeholder={this.props.globalState.user.email} onChange={this.updateEmailValue}/>
            </span>
            <br/>
             <span>
              Family Size: <Input placeholder={this.props.globalState.user.familySize} onChange={this.updateFSValue}/>
            </span>
            <br/>
            <span>
              Income: <Input placeholder={this.props.globalState.user.income} onChange={this.updateIncomeValue}/>
            </span>
            <br/>
            <span>
              Pets: <Input placeholder={this.props.globalState.user.pets} onChange={this.updatePetsValue}/>
            </span>
            <br/>
            <span>
              Gender: <Input placeholder={this.props.globalState.user.gender} onChange={this.updateGenderValue}/>
            </span>
            <br/>
            <span>
              Age: <Input placeholder={this.props.globalState.user.age} onChange={this.updateAgeValue}/>
            </span>
            <br/>
            <span>
              Location: <Input placeholder={this.props.globalState.user.location} onChange={this.updateLocationValue}/>
            </span>
            <br/>
          </Card.Description>
        </Card>
      </div>
    )
  }
}

export default Profile;