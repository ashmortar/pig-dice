//loose helper functions -------------
function dSix(){
  return Math.floor(Math.random() * 6 + 1)
}

function isOdd(num){
  if (num % 2 === 0 && num > 0){
    return false
  } else {
    return true
  }
}

function reset(players){
  for (var i=0;i<players.length;i++) {
    var player = players[i];
    player.turnScore = 0;
    player.totalScore = 0;
  }
}

// player object stuff ---------
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.roll = function() {
  var roll = dSix();
  if (roll === 1) {
    this.turnScore = 0;
    turn++;
    console.log(this.name + " turn score: " + this.turnScore);
    console.log("Turn: " + turn);
  } else {
    this.turnScore += roll;
    console.log(this.name + " turn score: " + this.turnScore);
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  turn++;
  console.log(this.name + " total score: " + this.totalScore);
  console.log(this.name + " turn score: " + this.turnScore);
  console.log("Turn: " + turn);
  if (this.totalScore >= 100) {
    console.log("you win");
    reset(players);
  }
}

//Global Variables

var playerOne = new Player ("Player 1");
var playerTwo = new Player ("Player 2");
var players = [playerOne, playerTwo];

var turn = 1;


//FRONT END BELOW THIS LINE ----------------
$(document).ready(function() {
  $("#playerOneName").text(playerOne.name);
  $("#playerOneTotalScore").text(playerOne.totalScore);
  $("#playerOneTurnScore").text(playerOne.turnScore);
  $("#playerTwoName").text(playerTwo.name);
  $("#playerTwoTotalScore").text(playerTwo.totalScore);
  $("#playerTwoTurnScore").text(playerTwo.turnScore);
  $("#turnArrow").text("<-------------");

  $("#roll").click(function() {
    if (isOdd(turn)) {
      playerOne.roll()
    } else {
      playerTwo.roll()
    }
  })

  $("#hold").click(function() {
    if (isOdd(turn)) {
      playerOne.hold();
    } else {
      playerTwo.hold();
    }
  })

});
