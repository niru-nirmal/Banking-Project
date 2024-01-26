function login() {
  var enteredUsername = document.getElementById("username").value;
  var enteredPassword = document.getElementById("password").value;

  var userData = localStorage.getItem(enteredUsername);
  
  if (userData) {
    var storedData = JSON.parse(userData);
    

    if (enteredPassword === storedData.password) {
      localStorage.setItem('loggedInUsername', enteredUsername)
      
      loginSuccessModal()
      
    } else {
      alert("Wrong Password");
    }
  } else {
    alert("Username not found");
  }

}

function loginSuccessModal() {
  var loginSuccessModal = document.getElementById('loginSuccessModal');
  loginSuccessModal.style.display = 'block';
}

function check() {
  console.log("Close called");
  var loginSuccessModal = document.getElementById('loginSuccessModal');
  loginSuccessModal.style.display = 'none';
  window.location.href = 'transaction.html';
}

function loginSuccessModal() {
  var loginSuccessModal = document.getElementById('loginSuccessModal');
  loginSuccessModal.style.display = 'block';
}

function check() {
  console.log("Close called");
  var loginSuccessModal = document.getElementById('loginSuccessModal');
  loginSuccessModal.style.display = 'none';
  window.location.href = 'transaction.html';
}

function forgotPassword() {
  var enteredUsername = prompt("Enter your username to recover password:");


  var userData = localStorage.getItem(enteredUsername);

  if (userData) {
    var storedData = JSON.parse(userData);
    alert("Your password is: " + storedData.password);
  } else {
    alert("Username not found");
  }
}
