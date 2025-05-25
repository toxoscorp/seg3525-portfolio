// form-mailto.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get values from the form
        const name = document.getElementById('name-1').value.trim();
        const email = document.getElementById('email-1').value.trim();
        const message = document.getElementById('message-1').value.trim();

        // Build validation error message
        let errors = [];
        if (!name) errors.push("Name is required.");
        if (!email) errors.push("Email is required.");
        if (!message) errors.push("Message is required.");

        if (errors.length > 0) {
            showPopup(
                "Please fix the following errors before sending:\n• " + errors.join('\n• ')
            );
            return;
        }

        // Set the recipient email address here
        const recipient = 'someone@example.com';

        // Construct mailto URL
        const subject = encodeURIComponent('Contact Form Submission');
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        // Open default mail client with pre-filled values
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });

    // Simple popup implementation
    function showPopup(message) {
        // Check if popup already exists
        let popup = document.getElementById('form-popup-message');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'form-popup-message';
            popup.style.position = 'fixed';
            popup.style.top = '20px';
            popup.style.left = '50%';
            popup.style.transform = 'translateX(-50%)';
            popup.style.backgroundColor = '#333';
            popup.style.color = '#fff';
            popup.style.padding = '16px 28px';
            popup.style.borderRadius = '6px';
            popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            popup.style.zIndex = '9999';
            popup.style.fontSize = '16px';
            popup.style.whiteSpace = 'pre-line';
            document.body.appendChild(popup);
        }
        popup.textContent = message;
        popup.style.display = 'block';

        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000);
    }
});