/*This script makes the header of the site sticky so that it is always visible when the user scrolls down.*/

/*We check when the user scrolls. When they do, we are going to execute the stickyHeader function.*/
window.onscroll = function() {stickyHeader()};

/*Here we get the header by assigning the element with the myHeader ID to a variable.*/
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

/*The stickyHeader function assigns the sticky class to the header if the page y-offset indicates that the user has scrolled down. */
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
