import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react'
import { RadialChart, Hint } from 'react-vis';
import "react-vis/dist/style.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    // Add constructor

    var dataOptions = [
      { text: 'Family Size', value: 'family' },
      { text: 'Marital Status', value: 'marital' },
      { text: 'Income', value: 'income' },
      { text: 'Pets', value: 'pets' },
      { text: 'Gender', value: 'gender' },
      { text: 'Age', value: 'age' },
      { text: 'Location', value: 'location' }
    ]

    this.state = {
      value: false,
      dataOptions,
      selected: 'age'
    }
  }

  setCategory = (e, data) => {
    this.setState({
      selected: data.value
    })
  }

  render() {
    return (
      <div>
        <Dropdown fluid selection onChange={this.setCategory} options={this.state.dataOptions} />
        <RadialChart
          className={'donut-chart-example'}
          innerRadius={100}
          radius={140}
          getAngle={d => d.theta}
          data={[
            { theta: 20 },
            { theta: 6 },
            { theta: 2 },
            { theta: 3 },
            { theta: 1 }
          ]}
          onValueMouseOver={v => this.setState({ value: v })}
          onSeriesMouseOut={v => this.setState({ value: false })}
          width={300}
          height={300}
          padAngle={0.04}
        >
          {this.state.value && <Hint value={this.state.value} />}
        </RadialChart>
      </div>  
    );
  }
}

export default Admin;