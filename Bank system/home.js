// START DarkModeJS
const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');

// Enable Dark Mode
const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode
const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
// END DarkModeJSs



// START MORE MENU
const moreMenu = document.querySelector('.more-menu-parent');
moreMenu.addEventListener("click", toggleMoreMenu);

function toggleMoreMenu() {
    console.log(this)
	this.querySelector('.more-menu').classList.toggle('active-more-menu');
}



// Get active menu item
function assignActiveNavItem(){
    let active = document.querySelector('.main-nav a[href^="/' + location.pathname.split("/")[1] + '"]');
    active.classList.add('active-nav-item');
}

assignActiveNavItem();