//This comment is about my JavaScript buttons, the menu that opens and collapses in the top left, and the "Jump to the top" button.
// Since I didn't know how to use Java before, I had to find a way to code these buttons on the internet. 
//These were my sources:
//menu: https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp
//"Jump to the top": https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

function openNav() {
    document.getElementById("mymenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mymenu").style.width = "0";
  }



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
