//Submit button changes to "Sent" when clicked. 
function myFunction() {

    var btn = document.getElementById("submit-button");

    if (btn.value == "Submit") {
            btn.value = "Sent"
            btn.innerHTML = "Sent";
            document.getElementById("submit-button"). className = "sent-button"; 
    } else {
                btn.value = "Submit";
                btn.innerHTML = "Submit";
                document.getElementById("submit-button"). className = "submit-button";
            }
}


//Terms button Collapses with content and changes to "Close Terms" 
    $(document).ready(function(){

            $("#terms").on("hide.bs.collapse", function(){
            $(".terms-button").html('Terms');
        });
            $("#terms").on("show.bs.collapse", function(){
            $(".terms-button").html('Close Terms');
        });
    });