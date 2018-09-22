import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'
import YoutubePlayer from 'react-youtube-player';

class VideoGroup extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    var videoCards = [];
    props.videos.forEach((video) => {
      videoCards.push(
        <YoutubePlayer videoId={video} />
      )
    })

    this.state = {
      videoCards: videoCards
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