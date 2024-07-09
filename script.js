document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login with Email: ${email}`);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    alert(`Register with Email: ${email}`);
    sendMail(email, password);
});

function sendMail(email, password) {
    fetch('sendMail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}`
    }).then(response => {
        if (response.ok) {
            alert('Registration email sent successfully.');
        } else {
            alert('Failed to send registration email.');
        }
    });
}
