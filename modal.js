// Get modal and button
let modal = document.getElementById("modal");
let btn = document.querySelector(".makeOfferBtn");
let close = document.querySelector(".close");

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

