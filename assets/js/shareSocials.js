// Social Share functions
document.addEventListener("DOMContentLoaded", function () {


    //Getting page information from the dom.
    let current_url = window.location.href;
    let currentPage_title = document.title; //Currently only for Twitter

    //Store the clicked elements in their variables: 
    let facebook = document.getElementById("fb");
    let twitter = document.getElementById("tw");
    let whatsapp = document.getElementById("wts");

    //Facebook share function runs if Facebook is clicked:
    facebook.addEventListener('click', function () {
        //Facebook share url command plus the current url:
        let fb_shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + current_url;
        //Deside window size:
        let window_size = "width=300,height=400";
        //Open:
        window.open(fb_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        return false;
    });

    //Twitter share function runs if Twitter is clicked
    twitter.addEventListener('click', function () {
        //Twitter share url command plus the individual page title and it's url:
        let tw_shareUrl = "https://twitter.com/intent/tweet?text=" + currentPage_title + "&url=" + current_url;
        //Deside window size:
        let window_size = "width=300,height=400";
        //Open: 
        window.open(tw_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        return false;
    });

    //Whatsapp share function runs if whatsapp is clicked 
    whatsapp.addEventListener('click', function () {
        //Whatsapp share url command plus the current url:
        let wts_shareUrl = "whatsapp://send?text=" + current_url;
        //Deside window size:
        let window_size = "width=300,height=400";
        //Open:
        window.open(wts_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
        return false;
    });
});

//Copy URL To Clipboard
function urlShare() {
    var sURL = window.location.href;
    sTemp = "<input id=\"copy_to_Clipboard\" value=\"" + sURL + "\" />";
    $("body").append(sTemp);
    $("#copy_to_Clipboard").select();
    document.execCommand("copy");
    $("#copy_to_Clipboard").remove();
    alert("URL is copied!");
}