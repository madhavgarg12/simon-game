


// colours and patterns

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var startingTitle = $("h1").text();
var started = false;
var levels = 0;
var highScore;



// Detect press "A"

$(".start-button").click(function(){
  if(!started){
    $(".start-button").text("Start")
    
    nextSequence();
    $("level-title").text("Level "+ levels);
    started = true;} 
   
      

    
  });
  // user pressed button 
  
  
  $(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  
  });
  

  
  

// check answer

function checkAnswer(currentLevel){
  
if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
 console.log("success")
 if(userClickedPattern.length === gamePattern.length){
   setTimeout(function(){
     nextSequence();
   }, 1000);
 
   userClickedPattern = [];
 
 }
}

else{
  console.log("wrong");
  wrong.play();


  $("body").addClass("game-over");

  setInterval(function(){
  $("body").removeClass("game-over")
  }, 200  )


  $(".level-title").text("Game Over, Press Play Again to Restart");
  $(".start-button").text("Play Again");

  startOver();
}



}

// Sequence function

function nextSequence(){
  var randomnumber = Math.floor( Math.random() * 4);
  var randomChosenColour = buttonColours[randomnumber];
  gamePattern.push(randomChosenColour);
  levels++ ;
  $("#level-title").text("Level " + levels);  
  
  // high score
  highScore = levels
  var highlevelset = Number($("#highlevel").text())

 

  
  
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  
  
}

// audio

  var blue = new Audio("blue.mp3");
  var green = new Audio("green.mp3");
  var red = new Audio("red.mp3");
  var wrong = new Audio("wrong.mp3");
  var yellow = new Audio("yellow.mp3");
  function playSound(name){

  if( name == "blue"){
    blue.play();
 }
 else if( name == "green"){
   green.play();
}
 else if( name == "red"){
   red.play();
}
 else if( name == "yellow"){
   yellow.play();
  }
else;

}


// animation on click 

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed"),100})
    
  }





  

// restart

function startOver(){
  levels = 0;
  gamePattern = [];
  started = false;
  userClickedPattern = [];
}


// dark mode

$(document).ready(function () {
  $("#tooglenight").change(function () {
    if (this.checked) {
     
      $(".box").addClass("night-border");
      $(".stats").addClass("night-title");
      $("#level-title").addClass("night-title");
      $("nav").addClass("night-nav");
      $("body").addClass("night");
      $("i").css("color", "white");
    } else {
      $("body").removeClass("night");
      
      $("#level-title").removeClass("night-title");
        $(".stats").removeClass("night-title");
        $("nav").removeClass("night-nav");
      $(".box").removeClass("night-border");
      $("i").css("color", "black");
    }
  });
});


// welcome message

console.log("Welcome to Tic Tac Toe");



















