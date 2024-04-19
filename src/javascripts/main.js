// Required by Webpack - do not touch
// require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
// require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
// require("../stylesheets/main.scss")

//TODO - Your ES6 JavaScript code (if any) goes here
import "@fortawesome/fontawesome-free/js/all";
import 'bootstrap';
import '../stylesheets//main.scss';

// Initialize emailJS
window.onload = function() {
    emailjs.init({
        publicKey: "cdqBJqhqZ-QKhVZU3",
    });
  
  // Handle form submission
    document.getElementById('rsvp-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("service_iibogi8", "template_87zfy43", this)
            .then(() => {
                //display an alert that the email was sent
                alert('Email sent successfully! We look forward to seeing you at our Wedding!');
                console.log('SUCCESS!');
                //reset the form
                document.getElementById('rsvp-form').reset();

            }, (error) => {
                //display an alert that the email was not sent
                alert('Email failed to send. Please try again later.');
                console.log('FAILED...', error);
        });
    });
}
