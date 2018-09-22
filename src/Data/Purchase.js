export default class Purchase {
    constructor(name, amount) {
  
      this.name = name;
      this.amount = amount;
  
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
  
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
  
      this.date = mm + '/' + dd + '/' + yyyy;
  
    }
  }