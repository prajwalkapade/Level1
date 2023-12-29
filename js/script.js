
function displayChange() {
    document.getElementById("alert").style.display = "block";
}
function removealert(){
    document.getElementById("alert").style.display = "none";
}
var sun = document.getElementById('sun');
var moon = document.getElementById('sun')
sun.onclick = function(){
        document.body.classList.toggle("light-theme");
        moon.classList.toggle('fa-moon')
}


// Get the current time
var date = new Date();
var hours = date.getHours();

// Create a greeting message based on the current time
var message;
if (hours < 12) {
  message = "Good morning!";
} else if (hours < 18) {
  message = "Good afternoon!";
} else {
  message = "Good evening!";
}

// Display the greeting message in an alert box
alert(message);
