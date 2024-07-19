document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('formMessage');

    // Basic validation (more robust validation is recommended)
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';
    
    // Here you would typically send the form data to the server
    // For example:
    // fetch('/send-email', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, email, message }),
    // }).then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch((error) => console.error('Error:', error));

    // Clear the form fields
    document.getElementById('contactForm').reset();
});
