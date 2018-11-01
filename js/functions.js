var page = 0;
var yesses = 0;
var nopes = 0;

//audio
function playAudio() {
  document.getElementById("myAudio").play();
}

function onLoad(){
  var yes = document.getElementById("yesButton")
  yes.addEventListener("click", function(){
    page++;
    yesses++;
    console.log(yesses + " yesses", "page: " + page);
    pageTurn();
    playAudio();
//listens for 'yes!' button click
  });
  var nope = document.getElementById("noButton")
  nope.addEventListener("click", function(){
    page++;
    nopes++;
    console.log(nopes + " nopes", "page: " + page);
    pageTurn();
    playAudio();
    //listens for 'nope!' button click
  });
}

window.addEventListener("load", onLoad);
window.addEventListener("load", pageTurn);

//function matches page number to page edits
function pageTurn(){
  switch (page){
    case 0:
    document.getElementById("noButton").hidden = true;
//main page
    break;
    case 1:
    document.getElementById("image").src = "assets/picture_1.jpg";
    document.getElementById("question").innerHTML = "Have you dreamed about the world ending tomorrow?";
    document.getElementById("yesButton").innerHTML = "Yes!";
    document.getElementById("noButton").hidden = false;
    document.getElementById("noButton").innerHTML = "Nope!";
    document.getElementById("title").hidden = true;
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
    break;
    case 12:
    document.getElementById("yesButton").hidden = true;
    document.getElementById("noButton").hidden = true;
    document.getElementById("image").hidden = true;
    document.getElementById("title").hidden = false;
    if (yesses < 6){
      document.getElementById("title").innerHTML = "Congratulations! You're not a psychopath!";
    }else{
      document.getElementById("title").innerHTML = "Congratulations! You're a psychopath!";
    }
    switch(yesses){
      case 1:
      document.getElementById("question").innerHTML = "you should really work on remembering your dreams better.";
      break;
      case 2:
      document.getElementById("question").innerHTML = "The universe is a simulation and only you know the truth!";
      break;
      case 3:
      document.getElementById("question").innerHTML = "You can actually fly! You’ve just never tried before.";
      break;
      case 4:
      document.getElementById("question").innerHTML = "You’re in a coma because you got hit by a car last year and this quiz is the only way your family can communicate with you. Please! Wake up!";
      break;
      case 5:
      document.getElementById("question").innerHTML = "You're the second coming of Jesus Christ.";
      break;
      case 6:
      document.getElementById("question").innerHTML = "You're a Cold War russian sleeper agent. Your activation phrase is 'There are absolutely no problems with your TAC schedule this semsester.'";
      break;
      case 7:
      document.getElementById("question").innerHTML = "Look out behind you!";
      break;
      case 8:
      document.getElementById("question").innerHTML = "You know that dream you had about that test you were unprepared for? That one was real.";
      break;
      case 9:
      document.getElementById("question").innerHTML = "When you fall asleep, you terminate your current state of conciousness. So essentially, every time you fall asleep, you die. Sweet dreams!";
      break;
      case 10:
      document.getElementById("question").innerHTML = "Ever watch the movie Inception? That was a pretty good film..";
      break;
      case 11:
      document.getElementById("question").innerHTML = "null";
      break;
      case 12:
      document.getElementById("question").innerHTML = "You just clicked all yesses, didn't you?";
    }
  }
}
//Fin
