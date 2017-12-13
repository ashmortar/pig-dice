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

// player object stuff ---------
function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.turn = true;
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
  }
}

//Global Variables
var playerOne = new Player ("Player 1");

var playerTwo = new Player ("Player 2");

var turn = 1;


//FRONT END BELOW THIS LINE ----------------
$(document).ready(function() {

});
