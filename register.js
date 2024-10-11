$(() => {
    // Handle register form submission
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();

        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();

        // validation checks
        if (password.length < 9) {
            $('#registerMessage').text('Password must be at least 8 characters.').css('color', 'red');
            return;
        }
        if (!/\d/.test(password)) {
            $('#registerMessage').text('Password must contain at least one number.').css('color', 'red');
            return;
        }
        if (password !== confirmPassword) {
            $('#registerMessage').text('Passwords do not match.').css('color', 'red');
            return;
        }


        // User object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Get existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if username or email already exists
        const userExists = users.some(u => u.username === username || u.email === email);
        if (userExists) {
            $('#registerMessage').text('Username or email already exists.').css('color', 'red');
            return;
        }

        // Add new user to users array and save to localStorage
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        const userRegistered = $('#registerMessage').text('Registration successful!').css('color', 'green');
        if (userRegistered) {
            setTimeout(() => {
                window.location.replace("./login.html");
            }, 2000);
        }
        $('#registerForm')[0].reset();
    });
});
