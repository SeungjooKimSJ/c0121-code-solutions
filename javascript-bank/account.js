/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function (amount) {
  var totalAmount = 0;
  // console.log('this.transactions:', this.transactions);
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions.type === 'deposit') {
      totalAmount += this.transactions[i];
    } else if (this.transactions.type === 'withdraw') {
      totalAmount -= this.transactions[i];
    }
  }
  return totalAmount;
};
