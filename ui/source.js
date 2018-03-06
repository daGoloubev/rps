function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
};
function computerPlay(){
  const r = getRandomInt(3);
  if(r == 0){
    return 'rock';
  } else if (r == 1){
    return 'paper';
  } else if (r == 2) {
    return 'scissors';
  } else {
    console.error('Cant pick random number.' );
  }
};
let playerSelection, computerSelection;
let playerScore       = 0;
let computerScore     = 0;
const max             = 5;
function print (){
  console.log('Player ==> '+playerSelection+' | Computer ==> '+computerSelection);
}
function win(){
  if(playerScore === max){
    console.log('Player wins');
  } else if (computerScore === max){
    console.log('Computer wins');
  }
}
function game(){
  //while (playerScore !== max && computerScore < max || computerScore !== max && playerScore < max) {
  //};
    //playerSelection = window.prompt('paper, rock, scissors?');
    console.log('paper, rock, scissors?');
    computerSelection = computerPlay();
    print();
    playRound(playerSelection, computerSelection);
    console.log('P: '+playerScore+' C: '+computerScore);
    win();
};
function playRound(playerSelection, computerSelection) {
   if(playerSelection === computerSelection){
     console.log('TIE!');
   } else {
     if(playerSelection === 'rock'){
       if(computerSelection === 'paper'){
         console.log('Paper beat Rock!');
         playerScore++;
       } else if(computerSelection === 'scissors'){
         console.log('Scissors beat Rock!');
         computerScore++;
       }
     } else if(playerSelection === 'paper'){
       if(computerSelection === 'rock'){
         console.log('Paper beat Rock!');
         playerScore++;
       } else if(computerSelection === 'scissors'){
         console.log('Scissors beat Paper!');
         computerScore++;
       }
     } else if(playerSelection === 'scissors') {
       if(computerSelection === 'paper'){
         console.log('Scissors beat Paper!');
         playerScore++;
       } else if(computerSelection === 'rock'){
         console.log('Rock beat scissors!');
         computerScore++;
       }
     } else {
       console.error('Invalid input, accepted values are rock, paper and scissors');
     }
   }
};
game();
