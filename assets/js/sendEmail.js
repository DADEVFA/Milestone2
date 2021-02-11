
// EmailJS function for contact page 

function sendMail(contactForm) {
    emailjs.send("service_vl0ozd1", "template_i8c3b8f", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
                // Message user if successful
            alert("Your message has been sent!");
            $("#contactForm")[0].reset();
        },
        function(error) {
            console.log("FAILED", error);
            // Message user if failed
            alert("Sorry, not working at the moment!");
        }
    );
    return false;  // To block from loading a new page
}