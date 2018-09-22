import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

class Home extends Component {
    constructor(props){
      super(props);

      // Add constructor
    }

    render() {
      return(

        <div>
           <Button onClick={this.handleButtonClick}>Toggle visibility</Button>
             <div>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={this.props.loggedIn}
                     width='thin'
                >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                 </Menu.Item>
                <Menu.Item as='a'>
                 <Icon name='info circle' />
                     Info
                </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='book' />
                         History
                    </Menu.Item>

            {this.props.globalState.admin &&
             <Menu.Item as='a'>
             <Icon name='desktop' />
              Admin
            </Menu.Item>
            }

           </Sidebar>
         </div>
        </div>
      )
    }
}

export default Home;