import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react'
import { RadialChart, Hint } from 'react-vis';
import $ from 'jquery';
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
      { text: 'Location', value: 'location' },
      { text: 'Donation Date', value: 'donationDate' },
      { text: 'Donation Value', value: 'donationValue' }
    ]

    var storageRef = firebase.storage().ref();

    var stats = {};

    var i = 1;
    this.props.globalState.adminData.users.forEach((user) => {
      var username = user.replace(/[$#\[\]]/, '').replace('.', '-').replace('@', '-');
      storageRef.child(username + '.json').getDownloadURL().then((url) => {
        $.getJSON(url, (data) => {
          stats.ages = []
          stats.ages.push(data.age);
          stats.donations = []
          data.donations.forEach((d) => {
            stats.donations.push(d)
          })
          stats.familySizes = [];
          stats.familySizes.push(data.familySize);
          stats.genders = [];
          stats.genders.push(data.genders);
          stats.incomes = [];
          stats.incomes.push(data.income);
          stats.locations = [];
          stats.locations.push(data.location);
          stats.pets = [];
          stats.pets.push(data.pets);
          stats.purchases = [];
          data.purchases.forEach((p) => {
            stats.purchases.push(p)
          })

          this.checkUsers(i);
          i++;
        })
      })
    })

    this.state = {
      value: false,
      dataOptions,
      selected: 'age',
      stats,
      numUsers: this.props.globalState.adminData.users.length,
      mainStats: []
    }
  }

  checkUsers = (i) => {
    if(this.state.numUsers === i){
      var mainStats = [];

      // Ages 20 - 25
      var cat1 = { age: 3 };
      // Ages 25 - 30
      var cat2 = { age: 5 };
      // Ages 30 - 35
      var cat3 = { age: 2 };
      // Ages 35 - 40
      var cat4 = { age: 7 };
      // Ages 40 - 45
      var cat5 = { age: 1 };
      // Other
      var cat6 = { age: 4 };

      this.state.stats.ages.forEach((age) => {
        if(age >= 20 && age < 25){
          cat1.age++;
        } else if (age >= 25 && age < 30){
          cat2.age++;
        } else if(age >= 30 && age < 35) {
          cat3.age++;
        } else if(age >= 35 && age < 40) {
          cat4.age++;
        } else if(age >= 40 && age < 45){
          cat5.age++;
        } else {
          cat6.age++;
        }
      })

      // We can use this format to implement the rest of the data types later

      mainStats.push(cat1, cat2, cat3, cat4, cat5, cat6);

      this.setState({
        mainStats
      })
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
        <Dropdown fluid selection onChange={this.setCategory} defaultValue='age' options={this.state.dataOptions} />
        <RadialChart
          className={'donut-chart-example'}
          innerRadius={100}
          radius={140}
          getAngle={d => d[this.state.selected]}
          data={this.state.mainStats}
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