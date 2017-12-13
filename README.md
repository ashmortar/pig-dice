## Specifications

| Behaviors  |  Input   |   Output  |
|-------------:|:----------:|:-------------|
|can generate a random number between 1 and 6| "roll" | random between 1 and 6|
|return specific behaviors for individual numbers | rolled 1 | "end of turn" |
|store and add up numbers into a "turn score" for each "roll" | 4, 5, 7 | 16|
|if a 1 is rolled zero out score| 4, 6, 3, 1 | 0  |
|"rolling" can be stopped| 3, 4, 5 | 12|
|once stopped total of "rolls" added to "total score" and "turn score" set to 0 | 3, 4, 5| total score = 12 turn score = 0|
|can detect when total score >= 100| total score 90, roll 5, 5 | total score 100 "you win" |
|can track 2 different total and turn scores| player 1 , player 2 | player 1 total score, turn score // player 2 total score, turn score|
|can track turns| player 1 rolls, ends turn | player 2 turn begins|
|if one total score >= 100 resets to base state| total score = 100 | "you win" player 1 totalScore = 0 and player 2 total score = 0;
