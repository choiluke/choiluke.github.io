var curr = 0;

auto_next();
var img_arr = document.getElementsByClassName("slideshow");

function autonext() {
  var iter;
  for (iter = 0; iter < img_arr.length; iter++) {
    x[iter].style.display = "none";
  }
  x[curr].style.display = "block";
  curr = (curr + 1) % img_arr.length;
  setTimeout(autonext, 4000);
}