import React, { Component } from 'react';
import LoginCard from '../Components/Login/LoginCard';
import { Modal, Button, Transition } from 'semantic-ui-react';
import * as firebase from 'firebase';
import GlobalProvider, { GlobalConsumer } from '../APIs/Global.context';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

class Home extends Component {

    state = { visible: false }
    handleButtonClick = () => this.setState({ visible: !this.state.visible })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {
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
                    visible={visible}
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

            {this.globalState.admin &&
             <Menu.Item as='a'>
             <Icon name='desktop' />
              Admin
            </Menu.Item>
            }

           </Sidebar>
         </div>
        </div>
    }

}