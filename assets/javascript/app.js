myAudio = new Audio('nbc.mp3');
myAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
myAudio.play();

var totalRight = 0;

var totalWrong = 0;

var unanswered = 0;

var time = 25;

var intervalId;

var questions = ["Which team is the all time leader in titles?", "Which player leads all time in scoring?", "Who is the all time assits leader?", "Which draft class was Kobe Bryant and Allen Iverson apart of?"];

var answers = {

  one : ["Lakers", "Celtics", "Bulls"],

  two : ["Michael Jordan", "Kobe Bryant", "Kareem Abdul-Jabar"],

  three: ["Magic Johnson", "Oscar Robertson", "John Stockton"],

  four: ["1996", "2003", "1992"],

}

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  time--;

  $(".time").html("<h2>" +"Time Left:"+ " " + time + "</h2>");

  if(time === 0){
    finalScore();
  }

}


function initialize(){

  run();

  $("#questionOne").html(questions[0] + "<div>"+"<input type='radio' name='firstAnswer' class='wrong'>" +answers.one[0]+ "</input>"+ "<input type='radio' name='firstAnswer' class='correct'>" +answers.one[1]+ "</input>" + "<input type='radio' name = 'firstAnswer' class='wrong'>" +answers.one[2]+ "</input>"+"</div>");

  $("#questionTwo").html(questions[1] + "<div>"+"<input type='radio' name='secondAnswer' class='wrong'>" +answers.two[0]+ "</input>"+"<input type='radio' name='secondAnswer' class='wrong'>" +answers.two[1]+ "</input>"+"<input type='radio' name='secondAnswer' class='correct'>" +answers.two[2]+ "</input>"+"</div>");

  $("#questionThree").html(questions[2] + "<div>"+"<input type='radio' name='thirdAnswer' class='wrong'>" +answers.three[0]+ "</input>"+"<input type='radio' name='thirdAnswer' class='wrong'>" +answers.three[1]+ "</input>"+"<input type='radio' name='thirdAnswer' class='correct'>" +answers.three[2]+ "</input>"+"</div>");

  $("#questionFour").html(questions[3] + "<div>"+"<input type='radio' name='fourthAnswer' class='correct'>" +answers.four[0]+ "</input>"+"<input type='radio' name='fourthAnswer' class='wrong'>" +answers.four[1]+ "</input>"+"<input type='radio' name='fourthAnswer' class='wrong'>" +answers.four[2]+ "</input>"+"</div>");

  $("#done").html("<button type='button' id='doneButton' class='btn btn-default btn-lg'>DONE!</button>");

  $("#startButton").remove();

  $("#doneButton").on("click", finalScore);
}

function finalScore(){
  clearInterval(intervalId);
  $(".time").remove();

    $(".correct:checked").is(function (){
      totalRight++;
    });

    $(".wrong:checked").is(function(){
      totalWrong++;
    });


  $(".game").html("<p>" + "ALL DONE!!!" + "</p>"+ "<div>" +"correct:"+ totalRight + "</div>" + "<div>" +"wrong:"+totalWrong + "</div>"+ "<img src='assets/images/kobe.gif'>");
}



$(document).ready(function(){

$("#startButton").on("click", initialize);



});
