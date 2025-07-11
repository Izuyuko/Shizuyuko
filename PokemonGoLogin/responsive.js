document.addEventListener('DOMContentLoaded', () => {
    const buttonGroup = document.getElementById('button-group');
    const signinForm = document.getElementById('signin-form');
    const createForm = document.getElementById('create-form');
    const createLink = document.getElementById('create-link');

    // Show sign-in form
    buttonGroup.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            buttonGroup.classList.add('hidden');
            signinForm.classList.remove('hidden');
            createForm.classList.add('hidden');
        });
    });

    // Show create account form
    createLink.addEventListener('click', (e) => {
        e.preventDefault();
        buttonGroup.classList.add('hidden');
        signinForm.classList.add('hidden');
        createForm.classList.remove('hidden');
    });

    // Sign-in form submit
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signed in successfully!');
    });

    // Create account form submit with validation
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = createForm.querySelector('input[type="email"]');
        const passwordInput = createForm.querySelector('input[type="password"]');
        const confirmPasswordInput = createForm.querySelectorAll('input[type="password"]')[1];

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must contain:\n• At least 8 characters\n• A capital letter\n• A lowercase letter\n• A number\n• A special character");
            passwordInput.focus();
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            confirmPasswordInput.focus();
            return;
        }

        alert('Account created successfully!');
        createForm.reset();
    });
});
