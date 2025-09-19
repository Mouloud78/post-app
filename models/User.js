let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.validate = function () {
  if (this.data.username == "") {
    this.errors.push("Yous must provide a username.");
  }
  if (this.data.email == "") {
    this.errors.push("Yous must provide a valide email address.");
  }
  if (this.data.password == "") {
    this.errors.push("Yous must provide a password.");
  }
};

User.prototype.register = function () {
  //Step #1 : Validate user data
  this.validate();
  //Step #2 : Only if there are no validation errors
  //Step #3 : then save the user data into database
};

module.exports = User;
