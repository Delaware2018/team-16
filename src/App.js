import React, { Component } from 'react';
import "./App.css";

import Main from './Pages/Main';

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
            <Main globalState={globalState}
              setGlobal={setGlobal} />
          }
        </GlobalConsumer>
      </GlobalProvider>
    );
  }

}

export default App;
