import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Card } from 'semantic-ui-react'
// import { CanvasJSChart } from 'canvasjs';

class Admin extends Component {
  constructor(props) {
    super(props);

    // Add constructor

  }

  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Website Traffic Sources"
      },
      data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Direct" },
          { y: 49, label: "Organic Search" },
          { y: 9, label: "Paid Search" },
          { y: 5, label: "Referral" },
          { y: 19, label: "Social" }
        ]
      }]
    }
    return (
      <div>
        {/* <CanvasJSChart options={options}
        /* onRef={ref => this.chart = ref} */
        /> */}
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Admin;