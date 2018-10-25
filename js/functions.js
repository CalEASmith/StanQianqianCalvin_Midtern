var pages = ["main","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh"];
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
  document.getElementById("question").innerHTML = "Have you dreamed about the world ending tomorrow?";
} else if (page = 2) {
  document.getElementById("question").innerHTML = "Did you fail to save the world?";
} else if (page = 3) {
  document.getElementById("question").innerHTML = "Did you wake from this terrible dream?";
} else if (page = 4) {
  document.getElementById("question").innerHTML = "Have you dreamed about zombies attacking at your house?";
} else if (page = 5) {
  document.getElementById("question").innerHTML = "Have you dreamed about being killed in your dream?";
} else if (page = 6) {
  document.getElementById("question").innerHTML = "Have you dreamed about yourself flying in the sky and fall?";
} else if (page = 7) {
  document.getElementById("question").innerHTML = "What happened after you fall?";
} else if (page = 8) {
  document.getElementById("question").innerHTML = "Have you ever dreamt that you’re still in school/have a test you never prepared for?";
} else if (page = 9) {
  document.getElementById("question").innerHTML = "Did you pass the DUE day in that dream?";
} else if (page = 10) {
  document.getElementById("question").innerHTML = "Have you dreamed about you are a god?";
} else if (page = 11) {
  document.getElementById("question").innerHTML = "Have you dreamed about having a computer science class at 8 pm?";
} else if (page = 12) {

}
