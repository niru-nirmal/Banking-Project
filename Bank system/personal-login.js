function login() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var userData = localStorage.getItem(enteredUsername);
    
    if (userData) {
        var storedData = JSON.parse(userData);
        
        if (enteredPassword === storedData.password) {
            localStorage.setItem('loggedInUsername', enteredUsername);

        
            if (!storedData.isCorporate) {
                window.location.href = 'transaction.html';
            } else {
                alert('You are a corporate user');
            }
        } else {
            alert("Wrong Password");
        }
    } else {
        alert("Username not found");
    }
}

function forgotPassword() {
    var enteredUsername = prompt("Enter your username to recover password:");

    var userData = localStorage.getItem(enteredUsername);

    if (userData) {
        var storedData = JSON.parse(userData);

        if (!storedData.isCorporate) {
            alert("Your password is: " + storedData.password);
        } else {
            alert("Access denied. Please check your username again!!");
        }
    } else {
        alert("Username not found");
    }
}
