document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('Login DOM loaded');
    }

    // Event listener for the login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Capture the form data
            const username = document.getElementById('username-input').value.trim();
            const password = document.getElementById('password-input').value.trim();

            if (username && password) {
                // Send a POST request to the API endpoint
                const response = await fetch('/api/users/login', {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // If successfully logged in, redirect to the dashboard
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to log in. Please check your username and password.');
                }
            }
        });
    }
});
