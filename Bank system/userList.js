function getUserData() {
  const tableBody = document.getElementById('userDataBody');
  tableBody.innerHTML = '';

  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    try {
      const userData = JSON.parse(localStorage.getItem(key));

      if (userData) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${userData.firstname}</td>
          <td>${userData.lastname}</td>
          <td>${userData.email}</td>
          <td>${userData.accountnumber}</td>
        `;
        tableBody.appendChild(row);
      }
    } catch (error) {
      console.error(`Error parsing data for key ${key}: ${error.message}`);
    }
  });
}
