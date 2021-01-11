
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



// Manual and Automatic function for CSS change"

// Get time" 
var day = new Date();
var hour = day.getHours();
// Night vs Day mode" 
let nightMode = "./assets/css/darkstyle.css";
let dayMode = "./assets/css/style.css";
// Target Switch button"
let switchcss = document.getElementById("theme-switcher");

function switchStyle() {

    // Check darkmode status" 
    if (localStorage.getItem('DARK_MODE') == "off" || localStorage.getItem('DARK_MODE') == "" || localStorage.getItem('DARK_MODE') == null) {
        switchcss.innerHTML = "DARK MODE";
//Darkmode is off" 
        document.getElementById('switchcss').setAttribute('href', dayMode);
    } else {
//Darkmode is on" 
        document.getElementById('switchcss').setAttribute('href', nightMode);
        switchcss.innerHTML = "BRIGHT MODE";
        if (localStorage.getItem('DARK_MODE') == "") {
// If darkmode is off, use css based on hour of day" 
            if (hour >= 6 && hour <= 20) {
                document.getElementById('switchcss').setAttribute('href', dayMode); btnSwitch();
            } else if (hour > 20 && hour < 5) {
                document.getElementById('switchcss').setAttribute('href', nightMode); btnSwitch();
            }
        }
    }
}

//Override CSS with theme switcher" 
function btnSwitch() {

//If CSS changes to Dark MODE set button to Bright MODE" 
    if (switchcss.innerHTML == "DARK MODE") {
        switchcss.innerHTML = "BRIGHT MODE";
        document.getElementById('switchcss').setAttribute('href', nightMode);
        localStorage.setItem("DARK_MODE", "on");

    } else if (switchcss.innerHTML == "BRIGHT MODE") {
        switchcss.innerHTML = "DARK MODE";
        document.getElementById('switchcss').setAttribute('href', dayMode);
        localStorage.setItem("DARK_MODE", "off");
    }
}

switchStyle();