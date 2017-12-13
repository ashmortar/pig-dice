function dSix(){
  return Math.floor(Math.random() * 6 + 1)
}

function Player(name) {
  this.name = name;
  this.totalScore = 90;
  this.turnScore = 0;
  this.turn = true;
}

Player.prototype.roll = function() {
  var roll = dSix();
  if (roll === 1) {
    this.turnScore = 0;
    console.log(this.turnScore);
  } else {
    this.turnScore += roll;
    console.log(this.turnScore);
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  console.log(this.totalScore);
  console.log(this.turnScore);
  if (this.totalScore >= 100) {
    console.log("you win");
  }
}

var playerOne = new Player ("Player 1");

var playerTwo = new Player ("Player 2");




//FRONT END BELOW THIS LINE ----------------
$(document).ready(function() {

});
