// BANK ACCOUNT

const account = {
accountName: "Sara Källqvist",
balance: 100,
getBalance: function () {
  alert ("Your balance is: " + this.balance)
 },
deposit: function () {
  let choice = parseFloat(prompt("How much would you like to deposit?"))
  if (isNaN(choice) )
  {
    this.accountError ("Error, please choose a numeric value.")
    return
  }
  this.balance = this.balance + choice
  alert ("Thank you for your deposit. Your new balance is: " +this.balance)
},
withdrawal: function () {
  let choice = parseFloat(prompt("How much would you like to withdraw?"))
  if (isNaN(choice) )
  {
    this.accountError ("Error, please choose a numeric value.")
    return
  }
  if (choice >this.balance )
  {
    this.accountError ("Amount exceeds account balance.")
    return
  }
  this.balance = this.balance - choice
  alert ("Thank you for your withdrawal. Your new balance is: " +this.balance)
},
getAccountName: function () {
  alert ("Your account name is: " +this.accountName)
},
accountError: function (message) {
  alert (message)
},
exitAccount: function () {
  alert ("Thank you for your visit, have a nice day!")
window.close ()
},
}
// parseFloat konverterar nummer, som för datorn är samma som text, till ett numerärt värde. Möjliggör att addera, subtrahera osv.

function atm() {
  let choice = parseInt(prompt
    ("Select a choice: 1. See Balance 2. Make a deposit 3. Make a Withdrawal 4. Get Account Name 5. Exit"));
  if (choice === 1) {
    account.getBalance ()
  }
  else if (choice === 2) {
account.deposit ()
  }
  else if (choice === 3) {
account.withdrawal ()
  }
  else if (choice === 4) {
account.getAccountName ()
  }
  else if (choice === 5) {
account.exitAccount ()
  }

  atm ()
}

atm()
