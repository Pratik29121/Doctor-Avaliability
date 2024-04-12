document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin-form');

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        
        if (email === 'example@example.com' && password === 'password') {
            // Redirect to index.html
            window.location.href = "index.html";
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
