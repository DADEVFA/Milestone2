
// EmailJS function for recieving e-mailaddresses"  

let btn = document.getElementById("submit-button");

function sendMail(fanForm) {
    emailjs.send("service_vl0ozd1", "template_iwvv5ga", {
        "from_email": fanForm.email.value
    })
        // Change Button on submit"  
        if (btn.value == "Submit") {
        btn.value = "Sent"
        btn.innerHTML = "Sent";
        document.getElementById("submit-button").className = "sent-button";
    } else {
        btn.value = "Submit";
        btn.innerHTML = "Submit";
        document.getElementById("submit-button").className = "submit-button";
    }
    return false;  // To block from loading a new page
}

