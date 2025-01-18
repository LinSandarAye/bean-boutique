(function() {
    emailjs.init("CgXkCEv6IaDH6A2uG"); // Initialize EmailJS with your user ID
})();

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const serviceID = 'service_9jancmf'; // Your EmailJS service ID
    const templateID = 'template_74sleic'; // Your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message failed to send. Please try again later.');
        });
});
