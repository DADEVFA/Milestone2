
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
    fix.classList.toggle("fixed-menu");
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

    // Check users prefered CSS status" 
    if (localStorage.getItem("CSS") == "DARK") {
        document.getElementById('switchcss').setAttribute('href', nightMode);
        // Menu button is ready for Bright Mode" 
        switchcss.innerHTML = "BRIGHT MODE";
    } if (localStorage.getItem("CSS") == "BRIGHT") {
        //Bright Mode is on" 
        document.getElementById('switchcss').setAttribute('href', dayMode);
        // Menu button is ready for Dark Mode" 
        switchcss.innerHTML = "DARK MODE";
    } if (localStorage.getItem("CSS") === null || localStorage.getItem("CSS") == " ") {
        // If User hasn't changed CSS manually, use css based on hour of day" 
        if (hour >= 6 && hour <= 20) {
            document.getElementById('switchcss').setAttribute('href', dayMode);
        } else if (hour > 20 && hour < 5) {
            document.getElementById('switchcss').setAttribute('href', nightMode);
        }
    }
}

//Override CSS with theme switcher" 
function btnSwitch() {

    //If CSS style currently is on Dark MODE make button ready for Bright MODE" 
    if (switchcss.innerHTML == "DARK MODE") {
        switchcss.innerHTML = "BRIGHT MODE",
            document.getElementById('switchcss').setAttribute('href', nightMode),
            //store current CSS style in DOM:
            localStorage.setItem("CSS", "DARK");
        //If CSS style currently is on Bright MODE make button ready for Dark MODE"    
    } else if (switchcss.innerHTML == "BRIGHT MODE") {
        switchcss.innerHTML = "DARK MODE",
            document.getElementById('switchcss').setAttribute('href', dayMode),
            //store current CSS style in DOM:
            localStorage.setItem("CSS", "BRIGHT");
    }
}

switchStyle();