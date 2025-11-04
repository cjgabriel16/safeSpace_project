document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');
    const usernameInput = document.getElementById('id_username_reg');
    const emailInput = document.getElementById('id_email_reg');
    const passwordInput = document.getElementById('id_password_reg');
    const passwordConfirmInput = document.getElementById('id_password_confirm');
    const termsCheckbox = document.getElementById('id_terms');
    const registerBtn = document.querySelector('.register-btn');

    // Function to check basic email format
    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simple utility to show feedback
        const feedback = (input, message) => {
            alert(message);
            input.focus();
        };

        // --- Core Validation Checks ---

        if (usernameInput.value.trim().length < 3) {
            feedback(usernameInput, "Username must be at least 3 characters long.");
            return;
        }

        if (!isValidEmail(emailInput.value.trim())) {
            feedback(emailInput, "Please enter a valid email address.");
            return;
        }
        
        if (passwordInput.value.length < 8) {
            feedback(passwordInput, "Password must be at least 8 characters.");
            return;
        }

        if (passwordInput.value !== passwordConfirmInput.value) {
            feedback(passwordConfirmInput, "Passwords do not match.");
            return;
        }
        
        if (!termsCheckbox.checked) {
            feedback(termsCheckbox, "You must agree to the Terms of Service to register.");
            return;
        }

        // --- If Valid: Submission Simulation ---
        registerBtn.textContent = 'Registering...';
        registerBtn.disabled = true;

        console.log("Form is valid. Ready to send registration data to the server.");
        alert("Registration successful (simulated). Submitting data to server...");
        
        // In a real app, you would submit the form data using an AJAX call here.
        
        // Reset button after a short delay (for demonstration)
        setTimeout(() => {
             registerBtn.textContent = 'Register';
             registerBtn.disabled = false;
        }, 2000);
    });
});