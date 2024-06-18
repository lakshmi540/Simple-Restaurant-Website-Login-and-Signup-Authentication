document.addEventListener('DOMContentLoaded', function () {
    // Hide forms initially
    document.querySelector('.form-container').style.display = 'none';
});

function changeTab(formId) {
    // Hide welcome box and show the selected form
    document.querySelector('.welcome-box').style.display = 'none';
    document.querySelector('.form-container').style.display = 'flex';

    var forms = document.querySelectorAll('.form');
    forms.forEach(function (form) {
        if (form.id === formId) {
            form.style.display = 'flex';
        } else {
            form.style.display = 'none';
        }
    });
}

function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('login-error-message');

    // Clear previous error messages and reset color
    errorMessage.innerHTML = '';
    errorMessage.style.color = 'red'; // Set color to red

    if (!username || !password) {
        errorMessage.innerHTML = 'All fields must be filled out';
        alert('All fields must be filled out');
        return false;
    }

    if (!/^[A-Za-z0-9]+$/.test(username)) {
        errorMessage.innerHTML = 'Username should be alphanumeric';
        alert('Username should be alphanumeric');
        return false;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{6,}/.test(password)) {
        errorMessage.innerHTML = 'Password should be at least 6 characters, including 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number';
        alert('Password should be at least 6 characters, including 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number');
        return false;
    }

    // Additional validation rules for login can be added here

    // Set the flag in localStorage indicating that the user is logged in
    localStorage.setItem('isLoggedIn', 'true');

    // Simulate successful login for demonstration purposes
    alert('Login successful!');

    // Redirect to home.html on successful login
    window.location.href = 'home.html';

    return true;
}


function validateSignupForm() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('signup-error-message');

    // Clear previous error messages and reset color
    errorMessage.innerHTML = '';
    errorMessage.style.color = 'red'; // Set color to red

    if (!newUsername || !newPassword || !confirmPassword) {
        errorMessage.innerHTML = 'All fields must be filled out';
        alert('All fields must be filled out');
        return false;
    }

    if (!/^[A-Za-z0-9]+$/.test(newUsername)) {
        errorMessage.innerHTML = 'Username should be alphanumeric';
        alert('Username should be alphanumeric');
        return false;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{6,}/.test(newPassword)) {
        errorMessage.innerHTML = 'Password should be at least 6 characters, including 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number';
        alert('Password should be at least 6 characters, including 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.');
        return false;
    }

    if (newPassword !== confirmPassword) {
        errorMessage.innerHTML = 'Passwords do not match';
        alert('Passwords do not match');
        return false;
    }

    // Simulate successful signup for demonstration purposes
    alert('Signup successful!');
    return true;
}
