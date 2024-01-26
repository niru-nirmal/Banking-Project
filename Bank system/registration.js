function register() {
  var firstname = document.getElementById('fname').value;
  var lastname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var accountnumber = document.getElementById('acc_num').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if(fname=="" || lname=="" || email=="" || accountnumber=="" || username=="" || password==""
  || confirmPassword=="")
	{
		alert("All Fields Are Required to filled");
		return false;
	}

  if (accountnumber.length !== 10) {
    alert("Account number should be of length 10");
    return false;
}

if (localStorage.getItem(accountnumber)) {
    alert('Account number already taken');
    return false;
}

  if (localStorage.getItem(accountnumber)) {
    alert('account number already taken');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }


    if (localStorage.getItem(username)) {
    alert('Username already taken');
    return;
  }

  localStorage.setItem(username, JSON.stringify({ username, password,firstname,lastname,email,accountnumber }));

  
  showRegistrationSuccessModal();
}

function showRegistrationSuccessModal() {
  var registrationSuccessModal = document.getElementById('registrationSuccessModal');
  registrationSuccessModal.style.display = 'block';
}

function closeRegistrationSuccessModal() {
  var registrationSuccessModal = document.getElementById('registrationSuccessModal');
  registrationSuccessModal.style.display = 'none';
  window.location.href = 'login.html';
}
