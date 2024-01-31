document.getElementById('logo').addEventListener('click', function () {
  window.location.href = 'home.html';
});

function isCorporateUser() {
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  if (loggedInUsername) {
      const userData = JSON.parse(localStorage.getItem(loggedInUsername));
      return userData && userData.isCorporate;
  }
  return false;
}

function getUserData() {
  if (!isCorporateUser()) {
      alert('Access denied. Only corporate users can view user data.');
      window.location.href = 'home.html'; 
      return;
  }

  const tableBody = document.getElementById('userDataBody');
  tableBody.innerHTML = '';

  const keys = Object.keys(localStorage);
  keys.forEach(key => {
      try {
          const userData = JSON.parse(localStorage.getItem(key));

          if (userData && !userData.isCorporate && userData.accountnumber !== undefined) {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${userData.firstname}</td>
                  <td>${userData.lastname}</td>
                  <td>${userData.email}</td>
                  <td>${userData.accountnumber}</td>
                  <td>${getBalanceForUser(key)}</td>
              `;
              tableBody.appendChild(row);
          }
      } catch (error) {
          console.error(`Error parsing data for key ${key}: ${error.message}`);
      }
  });
}

function getBalanceForUser(username) {
  const balanceData = JSON.parse(localStorage.getItem('balanceData')) || {};
  return balanceData[username] || 0;
}

document.getElementById('getUserButton').addEventListener('click', function () {
  getUserData();
});
