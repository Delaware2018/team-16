export default class User {
  constructor(name='',
              email='',
              familySize='',
              income=0,
              pets=0,
              gender='N/A',
              age=0,
              location=''){

    this.name = name;
    this.email = email;
    this.familySize = familySize;
    this.income = income;
    this.pets = pets;
    this.gender = gender;
    this.age = age;
    this.location = location;
    this.donations = [];
    this.purchases = [];
    this.admin = false;

  }
}