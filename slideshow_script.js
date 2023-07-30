var curr = 0;
var img_arr = document.getElementsByClassName("slideshow");

auto_next();

function autonext() {
  var iter;
  for (iter = 0; iter < img_arr.length; iter++) {
    img_arr[iter].style.display = "none";
  }
  img_arr[curr].style.display = "block";
  curr = (curr + 1) % img_arr.length;
  setTimeout(autonext, 4000);
}