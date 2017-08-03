myAudio = new Audio('nba.mp3');
myAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
myAudio.play();

var totalRight = 0;

var totalWrong = 0;

var time = 15;

var intervalId;

var questions = ["Which team is the all time leader in titles?", "Which player leads all time in scoring?", "Who is the all time assits leader?"];

var answers = {

  one : ["Lakers", "Celtics", "Bulls"],

  two : ["Michael Jordan", "Kobe Bryant", "Kareem Abdul-Jabar"],

  three: ["Magic Johnson", "Oscar Robertson", "John Stockton"],

}

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  time--;

  $(".time").html("<h2>" + time + "</h2>");

  if(time === 0){
    finalScore();
  }

}


function initialize(){

  run();

  $("#questionOne").html(questions[0] + "<div>"+"<input type='radio' name='firstAnswer' class='wrong'>" +answers.one[0]+ "</input>"+ "<input type='radio' name='firstAnswer' class='correct'>" +answers.one[1]+ "</input>" + "<input type='radio' name = 'firstAnswer' class='wrong'>" +answers.one[2]+ "</input>"+"</div>");

  $("#questionTwo").html(questions[1] + "<div>"+"<input type='radio' name='secondAnswer' class='wrong'>" +answers.two[0]+ "</input>"+"<input type='radio' name='secondAnswer' class='wrong'>" +answers.two[1]+ "</input>"+"<input type='radio' name='secondAnswer' class='correct'>" +answers.two[2]+ "</input>"+"</div>");

  $("#questionThree").html(questions[2] + "<div>"+"<input type='radio' name='thirdAnswer' class='wrong'>" +answers.three[0]+ "</input>"+"<input type='radio' name='thirdAnswer' class='wrong'>" +answers.three[1]+ "</input>"+"<input type='radio' name='thirdAnswer' class='correct'>" +answers.three[2]+ "</input>"+"</div>");

  $("#done").html("<button type='button' id='doneButton' class='btn btn-default btn-lg'>DONE!</button>");

  $("#startButton").remove();

  $("#doneButton").on("click", finalScore);
}

function finalScore(){
  clearInterval(intervalId);

    $(".correct:checked").is(function (){
      totalRight++;
    });

    $(".wrong:checked").is(function(){
      totalWrong++;
    });

  $(".game").html("<p>" + "ALL DONE!!!" + "</p>"+ "<div>" +"correct:"+ totalRight + "</div>" + "<div>" +"wrong:"+totalWrong + "</div>");
}



$(document).ready(function(){

$("#startButton").on("click", initialize);



});
