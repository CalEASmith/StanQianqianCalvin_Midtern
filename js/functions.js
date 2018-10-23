var pages = ["home","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh"];
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
