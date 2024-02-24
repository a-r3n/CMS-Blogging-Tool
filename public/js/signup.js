document.addEventListener('DOMContentLoaded', () => {
    console.info('Signup DOM loaded');

    // Event listener for the signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Capture the form data
            const username = document.getElementById('username-signup').value.trim();
            const email = document.getElementById('email-signup').value.trim(); // Ensure email capture
            const password = document.getElementById('password-signup').value.trim();

            if (username && email && password) {
                // Send a POST request to the API endpoint
                const response = await fetch('/api/users/signup', {
                    method: 'POST',
                    body: JSON.stringify({ username, email, password }), // Include email in the request body
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    // If successfully signed up, redirect to the dashboard or login page
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to sign up. Please try again.');
                }
            }
        });
    }
});
