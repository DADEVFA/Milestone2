
/*
EmailJS function for both: 
1) contactForm on contact.html 
2) fanForm on index.html
*/

function sendMail(data, template) {
    emailjs.send("service_vl0ozd1", template, data);
}

// Gather the values needed from contactForm: 
function processContactForm(form) {
    const data = {
        "from_name": form.name.value,
        "from_email": form.emailaddress.value,
        "subject": form.subject.value,
        "message": form.message.value
    }

    // Calling the sendMail function with the received values 
    // Using individual Email JS template:
    sendMail(data, "template_i8c3b8f")
    $("#contactForm")[0].reset(); // Reset form fields 
    return false;  // To block from loading a new page
}

// Gather the value needed from fanForm: 
function processFanForm(form) {
    const data = {
        "from_email": form.email.value
    }

    // Calling the sendMail function with the received values 
    // Using individual Email JS template:
    sendMail(data, "template_iwvv5ga")
    $("#fanForm")[0].reset(); // Reset input field 
    return false;  // To block from loading a new page
}




