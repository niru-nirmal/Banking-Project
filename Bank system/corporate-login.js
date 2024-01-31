function login() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var userData = localStorage.getItem(enteredUsername);

    if (userData) {
        var storedData = JSON.parse(userData);

        if (enteredPassword === storedData.password && storedData.isCorporate) {
            localStorage.setItem('loggedInUsername', enteredUsername);
            window.location.href = 'userlist.html';
        } else {
            alert("Invalid corporate credentials");
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

        if (storedData.isCorporate) {
            alert("Your password is: " + storedData.password);
        } else {
            alert("Access denied. Please check your username again!!");
        }
    } else {
        alert("Username not found");
    }
}
