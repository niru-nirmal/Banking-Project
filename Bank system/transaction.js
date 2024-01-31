document.getElementById('logo').addEventListener('click', function () {
  window.location.href = 'home.html';
});

function getAccountDetails() {
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};

  if (loggedInUsername) {
    const userData = JSON.parse(localStorage.getItem(loggedInUsername));

    if (userData && userData.accountnumber) {
      document.getElementById('accountNumber').textContent = userData.accountnumber;

      if (userData.firstname) {
        document.getElementById('firstname').textContent = 'Welcome ' + userData.firstname;
      }
    }

    if (balanceData[loggedInUsername]) {
      updateBalance(balanceData[loggedInUsername]);
    }
  }
}

function updateBalance(balance) {
  document.getElementById('balance').textContent = balance.toFixed(2);
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};

  balanceData[loggedInUsername] = balance;
  
  localStorage.setItem('balanceData', JSON.stringify(balanceData));
}

document.addEventListener('DOMContentLoaded', function () {
  getAccountDetails();
  populateUsernamesDropdown();
});

function withdraw() {
  var withdrawAmountInput = document.getElementById('withdrawAmount');
  var withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert('Invalid withdrawal amount');
    return;
  }

  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};
  const currentBalance = balanceData[loggedInUsername] || 1000;

  if (withdrawAmount > currentBalance) {
    alert('Insufficient Balance');
    return;
  }

  const newBalance = currentBalance - withdrawAmount;
  updateBalance(newBalance);

  withdrawAmountInput.value = '';
  alert('Withdrawal successful! New balance: ' + newBalance.toFixed(2));
}

function deposit() {
  var depositAmountInput = document.getElementById('depositAmount');
  var depositAmount = parseFloat(document.getElementById('depositAmount').value);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert('Invalid deposit amount');
    return;
  }

  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};
  const currentBalance = balanceData[loggedInUsername] || 0;

  const newBalance = currentBalance + depositAmount;
  updateBalance(newBalance);

  depositAmountInput.value = '';
  alert('Deposit successful! New balance: ' + newBalance.toFixed(2));
}

document.getElementById('logo').addEventListener('click', function () {
  window.location.href = 'home.html';
});

function transfer() {
  var transferAmountInput = document.getElementById('transferAmount');
  var transferToUsernameInput = document.getElementById('transferToUsername');

  var transferAmount = parseFloat(transferAmountInput.value);
  var transferToUsername = transferToUsernameInput.value;

  if (isNaN(transferAmount) || transferAmount <= 0) {
    alert('Invalid transfer amount');
    return;
  }

  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};
  const currentBalance = balanceData[loggedInUsername] || 0;

  if (transferAmount > currentBalance) {
    alert('Insufficient Balance');
    return;
  }

  const recipientBalance = balanceData[transferToUsername];

  if (recipientBalance === undefined) {
    alert('Recipient not found');
    return;
  }

  const newBalanceSender = currentBalance - transferAmount;
  const newBalanceRecipient = recipientBalance + transferAmount;

  balanceData[loggedInUsername] = newBalanceSender;
  balanceData[transferToUsername] = newBalanceRecipient;

  localStorage.setItem('balanceData', JSON.stringify(balanceData));

  transferAmountInput.value = '';
  transferToUsernameInput.value = '';
  alert('Transfer successful! New balance: ' + newBalanceSender.toFixed(2));
}

function populateUsernamesDropdown() {
  const dropdown = document.getElementById('transferToUsername');
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};

  for (const username in balanceData) {
    if (username !== loggedInUsername) {
      const option = document.createElement('option');
      option.value = username;
      option.text = username;
      dropdown.add(option);
    }
  }
}