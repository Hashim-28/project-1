document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let cardholderName = document.getElementById('cardholder-name').value;
    let cardNumber = document.getElementById('card-number').value;
    let expiryDate = document.getElementById('expiry-date').value;
    let cvv = document.getElementById('cvv').value;
    let amount = document.getElementById('amount').value;

    // Basic validation (more robust validation is recommended)
    if (!cardholderName || !cardNumber || !expiryDate || !cvv || !amount) {
        displayMessage('Please fill in all fields', 'error');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        displayMessage('Invalid card number', 'error');
        return;
    }

    displayMessage('Payment Successful', 'success');
});

function displayMessage(message, type) {
    let messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}

function validateCardNumber(cardNumber) {
    // Simple Luhn algorithm for card number validation
    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}
