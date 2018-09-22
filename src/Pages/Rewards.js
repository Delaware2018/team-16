  import 'rc-progress/assets/index.css';
  import React, { Component } from 'react';
  import { Line, Circle } from 'rc-progress';
  import { Button, CardGroup } from 'semantic-ui-react';
  import * as firebase from 'firebase';
  import { Header, Icon, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'

  class ProgressWheel extends Component {
    constructor() {
      super();
      this.state = {
        percent: 30,
        color: '#3FC7FA',
      };
      this.changeState = this.changeState.bind(this);
    }

    changeState() {
      const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
      const value = parseInt(Math.random() * 100, 10);
      this.setState({
        percent: value,
        color: colorMap[parseInt(Math.random() * 3, 10)],
      });
    }

    render() {
      const containerStyle = {
        width: '250px',
      };
      const circleContainerStyle = {
        position: 'relative',
        left: '225px',
        width: '250px',
        height: '250px',
        display: 'inline-block',
      };
      return (
        <div>
          <h3 style={{ position: 'relative', left: '215px'}}>Progress towards next reward: {40}%</h3>
          <div style={circleContainerStyle}>
            <Circle
              percent={this.state.percent}
              strokeWidth="6"
              strokeLinecap="round"
              strokeColor={this.state.color}
            />
          </div>
        <div>
        <div>
        <p style={{ position: 'relative', left: '233px',  fontSize: '18px'}}>
          Total Accumulated points: 40
        </p>
      </div>
        <div>
          <Card.Group style={{width:'800px', float:'right', marginTop:"-325px"}}>
            <Card raised onClick={() => { }}>
              <Card.Content centered>
                <Image centered src='./goodwillGiftcard.png' size='medium' />
                <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                  Goodwill Giftcard: 100 pts
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised onClick={() => { }}>
              <Card.Content centered>
                <Image centered src='./visaGiftcard.jpg' size='medium' />
                <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                  Visa Giftcard: 200 pts
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised onClick={() => { }}>
              <Card.Content centered>
                <Image centered src='./paypalGiftcard.jpg' size='medium' />
                <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                  Paypal Giftcard: 200 pts
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised onClick={() => { }}>
              <Card.Content centered>
                <Image centered src='./amazonGiftcard.jpg' size='medium' />
                <Card.Description textAlign='center'>
                  Amazon Giftcard: 200 pts
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised onClick={() => { }}>
              <Card.Content centered>
                <Image centered src='./ebayGiftcard.jpg' size='medium' />
                <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                  Ebay Giftcard: 200 pts
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised onClick={() => { }}>
              <Card.Content centered>
                <Image centered src='./walmartGiftcard.jpg' size='medium' />
                <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
                  Walmart Giftcard: 200 pts
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    </div>    
    );
  }
}

export default ProgressWheel;


// class Rewards extends Component {
//   constructor(props) {
//     super(props);

//     // Add constructor
//   }

//   render() {
//     return (
//       <div>
//       <div>
//         <Card.Group>
//           <Card raised onClick={() => { }}>
//             <Card.Content centered>
//               <Image centered src='./goodwillGiftcard.png' size='medium' />
//               <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
//                 Goodwill Giftcard
//               </Card.Description>
//             </Card.Content>
//           </Card>
//           <Card raised onClick={() => { }}>
//             <Card.Content centered>
//               <Image centered src='./visaGiftcard.jpg' size='medium' />
//               <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
//                 Visa Giftcard
//               </Card.Description>
//             </Card.Content>
//           </Card>
//           <Card raised onClick={() => { }}>
//             <Card.Content centered>
//               <Image centered src='./paypalGiftcard.jpg' size='medium' />
//               <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
//                 Paypal Giftcard
//               </Card.Description>
//             </Card.Content>
//           </Card>
//           <Card raised onClick={() => { }}>
//             <Card.Content centered>
//               <Image centered src='./amazonGiftcard.jpg' size='medium' />
//               <Card.Description textAlign='center'>
//                 Amazon Giftcard
//               </Card.Description>
//             </Card.Content>
//           </Card>
//           <Card raised onClick={() => { }}>
//             <Card.Content centered>
//               <Image centered src='./ebayGiftcard.jpg' size='medium' />
//               <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
//                 Ebay Giftcard
//               </Card.Description>
//             </Card.Content>
//           </Card>
//           <Card raised onClick={() => { }}>
//             <Card.Content centered>
//               <Image centered src='./walmartGiftcard.jpg' size='medium' />
//               <Card.Description textAlign='center' style = {{marginTop: '5px'}}>
//                 Walmart Giftcard
//               </Card.Description>
//             </Card.Content>
//           </Card>
//         </Card.Group>
//       </div>
//       <div class="ui progress">
//       <div class="bar">
//         <div class="progress"></div>
//       </div>
//       <div class="label">Rewards Progress</div>
//     </div>
//     </div>
//     )
//   }
// }

// export default Rewards;