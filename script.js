// Handle Card Clicks
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked: ${card.querySelector('p').textContent.toUpperCase()}`);
        // You can add more functionality here, like redirecting to a specific page
    });
});

// Handle logout action
const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Show a confirmation alert before logging out
    const userConfirmed = confirm('Are you sure you want to log out?');
    
    if (userConfirmed) {
        // Redirect the user to a login page or another page after logging out
        window.location.href = 'login.html';  // Change this URL to your login page
    }
});

// Handle device lock action
const deviceLockBtn = document.querySelector('.device-lock-btn');

deviceLockBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Show a confirmation alert before locking the device
    //const userConfirmed = confirm('Are you sure you want to lock the device?');
    
    if (userConfirmed) {
        // Lock the device (this is a placeholder for actual device locking functionality)
        alert('Device locked!');
        // You can add functionality to lock the screen or redirect to another page if needed.
    }
});

// Handle Bottom Navigation Clicks
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove the 'active' class from all navigation buttons
        navBtns.forEach(navBtn => navBtn.classList.remove('active'));
        
        // Add the 'active' class to the clicked button
        btn.classList.add('active');
        alert(`You clicked: ${btn.querySelector('img').alt.toUpperCase()}`);
        // Add functionality for each action (e.g., redirect to a specific page)
    });
});
