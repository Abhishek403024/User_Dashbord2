// script.js

// Toggle active state on menu items
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the 'active' class from all menu items
        menuItems.forEach(item => item.classList.remove('active'));
        
        // Add the 'active' class to the clicked item
        item.classList.add('active');
    });
});

// Handle logout action
const logoutLink = document.querySelector('.logout');

logoutLink.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Show a confirmation alert before logging out
    const userConfirmed = confirm('Are you sure you want to log out?');
    
    if (userConfirmed) {
        // Redirect the user to a login page or another page after logging out
        window.location.href = 'login.html';  // Change this URL to your login page
    }
});

// Handle device lock action
const deviceLockLink = document.querySelector('.device-lock');

deviceLockLink.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Show a confirmation alert before locking the device
    const userConfirmed = confirm('Are you sure you want to lock the device?');
    
    if (userConfirmed) {
        // Lock the device (this is a placeholder for actual device locking functionality)
        alert('Device locked!');
        // You can add functionality to lock the screen or redirect to another page if needed.
    }
});
