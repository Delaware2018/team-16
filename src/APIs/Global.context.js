import React, { Component } from 'react';

const GlobalContext = React.createContext();

export default class GlobalProvider extends Component{
  constructor(props){
    super(props);

    this.setGlobal = this.setGlobal.bind(this);
  }

  setGlobal(item){
    this.setState(item);
  }

  render(){
    const { children } = this.props;

    return (
      <GlobalContext.Provider
        value = {{
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
  }
}

export const GlobalConsumer = GlobalContext.Consumer;
