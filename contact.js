let submitButton = document.querySelector('.submit-button');
let contactPage = document.querySelector('.contact-page');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    contactPage.innerHTML = '<p>Thank you for your message</p>';
    contactPage.style.fontSize = '24px';
});