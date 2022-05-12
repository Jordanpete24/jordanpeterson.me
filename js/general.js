
//Fading of navbar's coloration when move off of it
$("div").hide();

$("html").mousemove(function( event ) {
    $("div").show();
    
    myStopFunction();
    myFunction();
});

function myFunction() {
    myVar = setTimeout(function(){
        $("div").hide();
    }, 1000);
}
function myStopFunction() {
    if(typeof myVar != 'undefined'){
        clearTimeout(myVar);
    }
}

// Navbar  Functions
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}