// Get the modal
function showModal1(){

// Get the button that opens the modal

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
  document.getElementsByClassName('modal')[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function vanish(){
 var modal = document.getElementById('signupmodal');
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById('signupmodal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal 2
function showModal2(){

// Get the button that opens the modal

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
  document.getElementsByClassName('modal')[1].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function disappear(){
  document.getElementById('signinmodal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal2 = document.getElementById('signinmodal');
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
