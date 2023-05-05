//These were my sources:
////"Jump to the top": https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//This comment is about my JavaScript buttons, the "Jump to the top" button.
// Since I didn't know how to use Java before, I had to find a way to code these buttons on the internet. 
//These were my sources:
//"Jump to the top": https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


let topbutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  topbutton.style.display = "block";
} else {
  topbutton.style.display = "none";
}
}


function topFunction() {
document.body.scrollTop = 0; 
document.documentElement.scrollTop = 0; 
}
