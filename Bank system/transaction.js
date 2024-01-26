var balance = 1000;

function updateBalance() {
  document.getElementById('balance').textContent = balance.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
  getAccountNumber(); 
});

function getAccountNumber() {
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  

  if (loggedInUsername) {
      const userData = JSON.parse(localStorage.getItem(loggedInUsername));
    
      if (userData && userData.accountnumber) {
        
          document.getElementById('accountNumber').textContent = userData.accountnumber;
      }
  }
}


function withdraw() {
  var withdrawAmountInput = document.getElementById('withdrawAmount');

  var withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
  if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > balance) {
    alert('Invalid withdrawal amount/Insufficient Balance');
    return;
  }

  balance -= withdrawAmount;
  
  updateBalance();
  withdrawAmountInput.value = '';
  alert('Withdrawal successful! New balance: ' + balance.toFixed(2));
}

function deposit() {
  var depositAmountInput = document.getElementById('depositAmount');

  var depositAmount = parseFloat(document.getElementById('depositAmount').value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert('Invalid deposit amount');
    return;
  }

  balance += depositAmount;
  updateBalance();
  depositAmountInput.value= '';
  alert('Deposit successful! New balance: ' + balance.toFixed(2));
}

updateBalance();