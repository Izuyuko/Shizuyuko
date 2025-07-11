document.addEventListener('DOMContentLoaded', () => {
    const buttonGroup = document.getElementById('button-group');
    const signinForm = document.getElementById('signin-form');
    const createForm = document.getElementById('create-form');
    const createLink = document.getElementById('create-link');

    // Show Sign In Form
    buttonGroup.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            buttonGroup.classList.add('hidden');
            signinForm.classList.remove('hidden');
            createForm.classList.add('hidden');
        });
    });

    // Show Create Account Form
    createLink.addEventListener('click', (e) => {
        e.preventDefault();
        buttonGroup.classList.add('hidden');
        signinForm.classList.add('hidden');
        createForm.classList.remove('hidden');
    });

    // Handle Sign In Submit
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signed in successfully!');
    });

    // Handle Create Account Submit
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const gender = document.getElementById('gender').value;
        const birthday = document.getElementById('birthday').value;
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const accountCode = document.getElementById('accountCode').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!firstName || !middleName || !lastName || !gender || !birthday || !accountCode) {
            alert("Please fill in all fields.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must contain:\n• At least 8 characters\n• A capital letter\n• A lowercase letter\n• A number\n• A special character");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Account successfully registered!");
        createForm.reset();
    });
});
