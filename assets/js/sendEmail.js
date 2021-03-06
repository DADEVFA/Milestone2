
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

    let btn = document.getElementById("send-button");

    // Change Button on submit"  
    if (btn.value == "Submit") {
        btn.value = "Sent";
        btn.innerHTML = "SENT";
        btn.className = "message-sent";
        // Change Submit button back to default after 4 seconds:  
        setTimeout(function () {
            btn.className = btn.className.replace("message-sent", "send-message-button");
            btn.value = "Submit";
            btn.innerHTML = "SEND";
        }, 4000);
        $("#contactForm")[0].reset(); // Reset input field 
    } else {
        btn.value = "Submit";
        btn.innerHTML = "SEND";
        document.getElementById("send-button").className = "send-message-button";
    }
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

    let btn = document.getElementById("submit-button");

    // Change Button on submit"  
    if (btn.value == "Submit") {
        btn.value = "Sent";
        btn.innerHTML = "Sent";
        btn.className = "sent-button";
        // Change Submit button back to default after 4 seconds:  
        setTimeout(function () {
            btn.className = btn.className.replace("sent-button", "submit-button");
            btn.value = "Submit";
            btn.innerHTML = "Submit";
        }, 4000);
        $("#fanForm")[0].reset(); // Reset input field 
    } else {
        btn.value = "Submit";
        btn.innerHTML = "Submit";
        document.getElementById("submit-button").className = "submit-button";
    }
    return false;  // To block from loading a new page
}