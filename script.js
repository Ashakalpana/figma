// Get references to the buttons
const buyNowButton = document.querySelector('.cta-button:nth-of-type(1)');
const watchVideoButton = document.querySelector('.cta-button:nth-of-type(2)');

// Add event listeners to the buttons
buyNowButton.addEventListener('click', () => {
    alert('Buy Now button clicked!');
});

watchVideoButton.addEventListener('click', () => {
    alert('Watch Video button clicked!');
});

// Newsletter subscription form
const newsletterForm = document.querySelector('.newsletter form');

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const email = emailInput.value;

    if (email.trim() === '') {
        alert('Please enter your email address.');
    } else {
        alert(`Subscribed with email: ${email}`);
        // You can add code here to submit the form data to your server
    }

    emailInput.value = ''; // Clear the input field after submission
});
