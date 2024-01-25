// Get modal and button
var modal = document.getElementById("modal");
var btn = document.querySelector(".makeOfferBtn");
var close = document.querySelector(".close");

// Open modal when button clicked
btn.onclick = function() {
  modal.style.display = "block";
  
}

// Close modal when x clicked  
close.onclick = function() {
  modal.style.display = "none";
}

// Close modal if outside click
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
}

// Nav Bar 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}