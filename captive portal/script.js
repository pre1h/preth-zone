document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Stops the form from submitting and refreshing the page

    var code = document.getElementById('code').value;  // Get the value entered for the code
    var name = document.getElementById('name').value;  // Get the value entered for the name

    // Check if the code is correct (we'll use "12345" as a dummy code for now)
    if (code === "12345" && name !== "") {
        alert('Successfully logged in! You are now connected.');
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});
