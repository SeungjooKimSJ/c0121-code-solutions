/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
};

Account.prototype.deposit = function (amount) {
  if (newAmount > 0) {
    var newAmount = new Amount;
    this.transactions.push(newAmount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (newAmount > 0) {
    var newAmount = new Amount;
    this.transactions.push(newAmount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var totalAmount = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions.type === 'deposit') {
      totalAmount += this.transactions[i];
    } else if (this.transactions.type === 'withdraw') {
      totalAmount -= this.transactions[i];
    }
  }
  return totalAmount;
}
