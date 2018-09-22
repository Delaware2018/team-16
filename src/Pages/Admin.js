import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { Header, Input, Image, Menu, Segment, Card, Dropdown } from 'semantic-ui-react'
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
      var cat1 = { numAge: 3, age: '18 and under', gender: 20, genderType: 'Male', family: 9, familySize: '1', income: 3, incomeAmount: "0-30000", marital: 20, maritalStatus: 'Single', locations: 2, location: "Delaware", pets: 6, numPets: '0', purchases: 3, numPurchases: '0', donations: 6, numDonations: '0' };
      // Ages 25 - 30
      var cat2 = { numAge: 6, age: '19-30', gender: 24, genderType: 'Female', family: 14, familySize: '2', income: 10, incomeAmount: "30001-70000", marital: 0, maritalStatus: 'Single', locations: 10, location: "Virginia", pets: 6, numPets: '0', purchases: 3, numPurchases: '0', donations: 6, numDonations: '0' };
      // Ages 30 - 35
      var cat3 = { ageNumber: 4, age: '25-30', gender: 7, genderType: 'Female', family: 2, familySize: '3', income: 7 , incomeAmount: "71000-99000", marital: 30, maritalStatus: 'Married', locations: 8, location: "Maryland", pets: 4, numPets: '2', purchases: 5, numPurchases: '2', donations: 3, numDonations: '1'};
      // Ages 35 - 40
      var cat4 = { ageNumber: 4, age: '40-45', gender: 10, genderType: 'Male', family: 9, familySize: '4', income: 7 , incomeAmount: "0-60000", marital: 10, maritalStatus: 'Married', locations: 3, location: "Maryland", pets: 4, numPets: '1', purchases: 10, numPurchases: '6', donations: 3, numDonations: '5' };
      // Ages 40 - 45
      var cat5 = { age: 1, gender: 0, family: 3, familySize: '5', income: 4 };
      // Other
      var cat6 = { age: 4, gender: 0, family: 1, familySize: '6', income: 6 };

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
    const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }

    const hintStyle = {
      color: 'black',
      fontSize: '20px'
    }
    return (
      <div style={divStyle}>
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
          label={d => d[this.state.selected]}
          height={300}
          padAngle={0.04}
        >
        </RadialChart>

        <Card>
          <Card.Header>
            <h1>Reviewing {this.state.selected}</h1>
          </Card.Header>
          <Card.Content>
            { this.state.selected === 'family' && 
              <div>
                <h3>Family Size: {this.state.value.familySize}</h3>
                <h3>Number with this Family Size: {this.state.value[this.state.selected]}</h3>
              </div>
            }
            {this.state.selected === 'gender' &&
              <div>
                <h3>Gender type: {this.state.value.genderType}</h3>
                <h3>Number with this Gender: {this.state.value[this.state.selected]}</h3>
              </div>
            }
            
          </Card.Content>
        </Card>
      </div>  
    );
  }
}

export default Admin;