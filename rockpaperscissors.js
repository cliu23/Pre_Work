////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {

         return move || getInput();
    }

function getComputerMove(move) {

        return move || randomPlay();
    }


function getWinner(playerMove,computerMove) 
    {
    if (playerMove===computerMove) 
     {
        return "tie";
     } 
    else if ((playerMove=="rock" && computerMove=="scissors")||
            (playerMove=="paper" && computerMove=="rock") ||
            (playerMove=="scissors" && computerMove=="paper")) 
        {
            return "player";    
        } 
    else {
            return "computer";

        }
    }
        
  function playToFive() 
 {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var tie= 0;
    while(playerWins<5 && computerWins<5) {
    var winner=getWinner(playerMove,computerMove);
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
        console.log("Player chose "+ playerMove);
        console.log("Computer chose " + computerMove);
            
    if (winner==="player") {
        playerWins +=1;
        console.log("The score is currently "+ playerWins + " to " + computerWins);

    }
    else if (winner==="computer") {
        computerWins +=1;
        console.log("The score is currently "+ playerWins + " to " + computerWins);

    }
    else {
         tie +=1;
                 console.log("The score is currently "+ playerWins + " to " + computerWins + " Tie Game " + tie);
    }
    }
   return [playerWins, computerWins];
  }
 
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

    /* YOUR CODE HERE */
playToFive()
