var pages = ["main","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh"];
var page = 0;
var yesses = 0;
var nopes = 0;

//audio
var ding = new Audio("assets/audio/bell-ding.wav");
function playAudio() {
  ding.play();
}

function onLoad(){
  var yes = document.getElementById("yesButton")
  yes.addEventListener("click", function(){
    page++;
    yesses++;
    console.log(yesses + " yesses", "page: " + pages[page]);
    pageTurn();
    playAudio();
//listens for 'yes!' button click
  });
  var nope = document.getElementById("noButton")
  nope.addEventListener("click", function(){
    page++;
    nopes++;
    console.log(nopes + " nopes", "page: " + pages[page]);
    pageTurn();
    playAudio();
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
    document.getElementById("image").src = "assets/picture_1.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about the world ending tomorrow?";
    break;
    case 2:
    document.getElementById("image").src = "assets/picture_2.jpeg";
    document.getElementById("question").innerHTML = "Did you fail to save the world?";
    break;
    case 3:
    document.getElementById("image").src = "assets/picture_3.jpg";
    document.getElementById("question").innerHTML = "Did you wake from this terrible dream?";
    break;
    case 4:
    document.getElementById("image").src = "assets/picture_4.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about zombies attacking at your house?";
    break;
    case 5:
    document.getElementById("image").src = "assets/picture_5.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about being killed in your dream?";
    break;
    case 6:
    document.getElementById("image").src = "assets/picture_6.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about yourself flying in the sky and fall?";
    break;
    case 7:
    document.getElementById("image").src = "assets/picture_7.jpg";
    document.getElementById("question").innerHTML = "What happened after you fall?";
    break;
    case 8:
    document.getElementById("image").src = "assets/picture_8.jpg";
    document.getElementById("question").innerHTML = "Have you ever dreamt that you’re still in school/have a test you never prepared for?";
    break;
    case 9:
    document.getElementById("image").src = "assets/picture_9.jpg";
    document.getElementById("question").innerHTML = "Did you pass the DUE day in that dream?";
    break;
    case 10:
    document.getElementById("image").src = "assets/picture_10.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about you are a god?";
    break;
    case 11:
    document.getElementById("image").src = "assets/picture_11.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about having a computer science class at 8 pm?";
  }
}
