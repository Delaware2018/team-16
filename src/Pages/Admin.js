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

      // Ages 18 and under
      var cat1 = { numAge: 3, age: '18 and under', numGender: 4, gender: 'Male', family: 9, familySize: '1', numIncome: 3, income: 'Under 30000', marital: 20, maritalStatus: 'Single', locations: 5, location: 'Delaware', pets: 6, numPets: '0', purchases: 3, numPurchases: '0', donations: 6, numDonations: '0' };
      // Ages 19 - 29
      var cat2 = { age: '19 to 29', numAge: 6, family: 6, familySize: '2', income: '45000-60000', numIncome: 5 };
      // Ages 30 - 39
      var cat3 = { age: '30 to 39', gender: 'Female', family: 2, familySize: '3', income: '2', purchases: 5, numPurchases: '2', donations: 3, numDonations: '1'};
      // Ages 40 - 49
      var cat4 = { numAge: 8, age: '40-49', numGender: 8, family: 3, familySize: '5', numIncome: 3, income: '30000-45000', marital: 5, maritalStatus: 'Married', locations: 5, location:"Maryland", pets: 3, numPets: '2', purchases: 5, numPurchases: '1', donations: 6, numDonations: '2' };
      // Ages 50 - 59
      var cat5 = { age: '50 to 59', gender: 0, family: 3, familySize: '5', numIncome: 8, income: 4, marital: 6, maritalStatus: 'Single', locations: 3, location:"DE", pets: 1, numPets: '4', purchases: 7, numPurchases: '5', donations: 9, numDonations: '9'};
      // Other
      var cat6 = { numAge: 1, age: '60 and over', gender: 5, family: 1, familySize: '6', numIncome:'Over 60000', income: 6, purchases: 8, numPurchases: '3', numDonations: '5' };

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
            }{ this.state.selected === 'gender' && 
              <div>
                <h3>Gender Type: {this.state.value.gender}</h3>
                <h3>Number with this Gender: {this.state.value[this.state.selected]}</h3>
              </div>
            }{ this.state.selected === '' && 
              <div>
                <h3>Marital Status: {this.state.value.maritalStatus}</h3>
                <h3>Number with this Family Size: {this.state.value[this.state.selected]}</h3>
              </div>
            }{ this.state.selected === 'age' && 
            <div>
              <h3>Income: {this.state.value.income}</h3>
              <h3>Number with this Marital Status: {this.state.value[this.state.selected]}</h3>
            </div>
          }
            
          </Card.Content>
        </Card>
      </div>  
    );
  }
}

export default Admin;