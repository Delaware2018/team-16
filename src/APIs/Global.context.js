import React, { Component } from 'react';
// Firebase / Database Tools
import * as firebase from 'firebase';

import User from '../Data/User';

const GlobalContext = React.createContext();

export default class GlobalProvider extends Component{
  constructor(props){
    super(props);

    this.setGlobal = this.setGlobal.bind(this);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBVuaYbSeN3YweBpRtdUaJQpgHlZpqRbWQ",
      authDomain: "jpmorgancodeforgood16.firebaseapp.com",
      databaseURL: "https://jpmorgancodeforgood16.firebaseio.com",
      projectId: "jpmorgancodeforgood16",
      storageBucket: "jpmorgancodeforgood16.appspot.com",
      messagingSenderId: "144054862894"
    };
    firebase.initializeApp(config);

    var user = new User();

    this.state = {
      loggedIn: false,
      creating: false,
      username: '',
      user: user,
      adminData: []
    }
  }

  setGlobal(item){
    this.setState(item);
  }

  render(){
    const { children } = this.props;

    return (
      <GlobalContext.Provider
        value = {{
          setGlobal: this.setGlobal,
          globalState: this.state
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
  }
}

export const GlobalConsumer = GlobalContext.Consumer;
