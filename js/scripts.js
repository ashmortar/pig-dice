function dSix(){
  return Math.floor(Math.random() * 6 + 1)
}

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
    return this.turnScore;
  } else {
    this.turnScore += roll;
    return this.turnScore;
    //console.log(roll);
  }
}

var playerOne = new Player ("Player 1");




//FRONT END BELOW THIS LINE ----------------
$(document).ready(function() {

});
