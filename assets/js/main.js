//Submit button changes to "Sent" when clicked. 
function myFunction() {

    var btn = document.getElementById("submit-button");

    if (btn.value == "Submit") {
        btn.value = "Sent"
        btn.innerHTML = "Sent";
        document.getElementById("submit-button").className = "sent-button";
    } else {
        btn.value = "Submit";
        btn.innerHTML = "Submit";
        document.getElementById("submit-button").className = "submit-button";
    }
}


//Terms button Collapses with content and changes to "Close Terms" 
$(document).ready(function () {

    $("#terms").on("hide.bs.collapse", function () {
        $(".terms-button").html('Terms');
    });
    $("#terms").on("show.bs.collapse", function () {
        $(".terms-button").html('Close Terms');
    });
});

//Animation for Hamburger + No Scrolling Menu" 

const menuIcon = document.querySelector(".hamburger");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("changelines");
    // No Scroll in Menu function"
    let fix = document.querySelector("body");
    fix.classList.toggle("fixed-menu")
});


//Animation for share button" 

function toggleShareMenu() {
    document.getElementsByClassName("share-menu")
    [0].classList.toggle("active");
}

//Switch CSS Stylesheet Manually" 

function switchStyle() {

    //Dark vs Bright mode" 
    let darkMode = "./assets/css/darkstyle.css";
    let brightMode = "./assets/css/style.css";

    //Button" 
    var switchcss = document.getElementById("theme-switcher");


    //If button is Dark MODE" 
    if (switchcss.innerHTML == "DARK MODE") {
        switchcss.value = "BRIGHT MODE";
        switchcss.innerHTML = "BRIGHT MODE";
        document.getElementById('switchcss').setAttribute('href', darkMode);

    } else {
        //If button is Dark MODE" 
        (switchcss.innerHTML == "BRIGHT MODE"); {
            switchcss.value = "DARK MODE";
            switchcss.innerHTML = "DARK MODE";
            document.getElementById('switchcss').setAttribute('href', brightMode);
        } 
    }
}
