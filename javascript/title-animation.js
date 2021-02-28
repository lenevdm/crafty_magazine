/*For the magazine title, when the user scrolls 50px down from the top of the document the font will be resized*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 50) {
    document.getElementById("shrink").style.fontSize = "30px";
    document.getElementById("shrink").style.backgroundColor ="thistle";
  } else {
    document.getElementById("shrink").style.fontSize = "100px";
    document.getElementById("shrink").style.backgroundColor ="transparent";
  }
}

