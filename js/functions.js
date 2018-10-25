var pages = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh"];
var page = 0;
var yesses = 0;
var nopes = 0;
function onLoad(){
  var yes = document.getElementById("yesButton")
  yes.addEventListener("click", function(){
    page++;
    yesses++;
    console.log(yesses + " yesses", "page: " + pages[page]);
  });
  var nope = document.getElementById("noButton")
  nope.addEventListener("click", function(){
    page++;
    nopes++;
    console.log(nopes + " nopes", "page: " + pages[page]);
  });
}
window.addEventListener("load", onLoad);

if (page = 0) {
  document.style.backGroundColor =
  document.getElementById("question").innerHTML = "Something else!!!!!";
} else if (page = 1) {
  document.getElementById("image").src = "assets/picture_2";
  document.getElementById("question").innerHTML = "OTHER QUESTION!!!";
} else if (page = 2) {

} else if (page = 3) {

} else if (page = 4) {

} else if (page = 5) {

} else if (page = 6) {

} else if (page = 7) {

} else if (page = 8) {

} else if (page = 9) {

} else if (page = 10) {

} else if (page = 11) {

}
