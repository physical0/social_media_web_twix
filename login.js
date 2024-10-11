$(() => {
    // Handle login form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        let loginUsername = $('#loginUsername').val();
        let loginPassword = $('#loginPassword').val();

        // Get users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // validate user
        const validUser = users.find(u => u.username === loginUsername && u.password === loginPassword);

        if (validUser) {
            $('#loginMessage').text('Login successful!').css('color', 'purple');
            setTimeout(() => {
                window.location.replace("./index.html");
            }, 2000);
        } else {
            $('#loginMessage').text('Invalid username or password.').css('color', 'red');
        }
    });
});


var typeText = {
    strings: ["Hey there!", "Welcome to Twix!"],
    typeSpeed: 100,
    backSpeed: 100, 
    startDelay: 1000,
    backDelay: 500, 
    showCursor: false,
    loop: false 
};


var typedOp = new Typed("#typingText", typeText);
