import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'

class VideoGroup extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    props.videos.forEach((video) => {
      
    })

    this.state = {
      videoCards: []
    }
  }

  render() {
    return (
      <div>
        {this.state.videoCards}
      </div>
    )
  }
}

export default VideoGroup;