//social share functions

document.addEventListener("DOMContentLoaded", function() {


	//Getting page information
	let current_url = window.location.href;
	let currentPage_title = document.title;

	//Targeting
	let facebook = document.getElementById("fb");
	let twitter = document.getElementById("tw");
	let whatsapp = document.getElementById("wts");

	//Facebook
	facebook.addEventListener('click', function() {
		let fb_shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + current_url;
		let window_size = "width=300,height=400";
		window.open(fb_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
		return false;
	});

	//Twitter
	twitter.addEventListener('click', function() {
		let tw_shareUrl = "https://twitter.com/intent/tweet?text=" + currentPage_title + "&url=" + current_url;
		let window_size = "width=300,height=400";
		window.open(tw_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
		return false;
	});

	//Whatapp
	whatsapp.addEventListener('click', function() {
		let wts_shareUrl = "whatsapp://send?text=" + current_url;
		let window_size = "width=300,height=400";
		window.open(wts_shareUrl, "", "menubar=no,resizeable=yes,scrollbars=yes," + window_size);
		return false;
	});


});

//Copy URL
function urlShare() {
	var sURL = window.location.href;
	sTemp = "<input id=\"copy_to_Clipboard\" value=\"" + sURL + "\" />";
	$("body").append(sTemp);
	$("#copy_to_Clipboard").select();
	document.execCommand("copy");
	$("#copy_to_Clipboard").remove();
	alert("URL is copied!");
}