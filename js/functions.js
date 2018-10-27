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
    pageTurn();
//listens for 'yes!' button click
  });
  var nope = document.getElementById("noButton")
  nope.addEventListener("click", function(){
    page++;
    nopes++;
    console.log(nopes + " nopes", "page: " + pages[page]);
    pageTurn();
    //listens for 'nope!' button click
  });
}
window.addEventListener("load", onLoad);

//function matches page number to page edits
function pageTurn(){
  switch (page){
    case 0:
//main page

    break;
    case 1:
    document.getElementById("image").src = "assets/picture_2.jpeg";
    document.getElementById("question").innerHTML = "Have you dreamed about the world ending tomorrow?";
    break;
    case 2:

    break;
    case 3:

    break;
    case 4:

    break;
    case 5:

    break;
    case 6:

    break;
    case 7:

    break;
    case 8:

    break;
    case 9:

    break;
    case 10:

    break;
    case 11:
  }
}
