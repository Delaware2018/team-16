import React, { Component } from 'react';
import "./App.css";

// Context / Global State
import GlobalProvider, { GlobalConsumer } from './APIs/Global.context.js';

class App extends Component {

  loggedIn = false;

  constructor(props){
    super()
  }

  render() {
    return (
      <GlobalProvider>
        <GlobalConsumer>
          {({ globalState, setGlobal }) =>
            <div>
              Test
            </div>
          }
        </GlobalConsumer>
      </GlobalProvider>
    );
  }

}

export default App;
