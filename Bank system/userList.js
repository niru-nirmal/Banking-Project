function getUserData() {

const tableBody = document.getElementById('userDataBody');
tableBody.innerHTML = ''; 

const keys = Object.keys(localStorage);
keys.forEach(key => {
  const value = localStorage.getItem(key);
  const userData = JSON.parse(value);
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${userData.firstname}</td>
    <td>${userData.lastname}</td>
    <td>${userData.email}</td>
    <td>${userData.accountnumber}</td>
  `;

  tableBody.appendChild(row);
});


}