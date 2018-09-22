import React, { Component } from 'react';

const GlobalContext = React.createContext();

export default class GlobalProvider extends Component{
  constructor(props){
    super(props);

    this.setGlobal = this.setGlobal.bind(this);

    this.state = {
      loggedIn: false
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
