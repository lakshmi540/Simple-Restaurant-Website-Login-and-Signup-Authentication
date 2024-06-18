function changeTab(tabId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        if (content.id === tabId + 'Content') {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    });
}

function logout() {
    // Redirect to index.html on logout
    window.location.href = 'index.html';
}

function toggleCollapsible() {
    var reservationsSidebar = document.getElementById('reservationsSidebar');
    reservationsSidebar.classList.toggle('collapsed');
}

// Check if the user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');

// If not logged in, redirect to index.html
if (!isLoggedIn) {
    window.location.href = 'index.html';
}