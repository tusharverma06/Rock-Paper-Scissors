

const totalScore = {'playerScore': 0, 'computerScore': 0}


function getComputerChoice() {
  let computerChoice = ['Rock', 'Paper', 'Scissors']
  return computerChoice[Math.floor(Math.random() * 3)]

}



function getResult(playerChoice, computerChoice) {

  let score
  if(playerChoice == 'Rock' && computerChoice == 'Scissors' ){
score = 1
    
  }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
    
  }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
  
  }
  else if(playerChoice == computerChoice){
    score = 0
    
  }else {
    score = -1
    totalScore['computerScore']+=1
    
  }
  return score

  

  
}

function showResult(score, playerChoice, computerChoice) {
  const computerScoreDiv = document.getElementById("computerScore")
const totalScoreDiv = document.getElementById("totalScore")
  const playerScoreDiv = document.getElementById('player-score')
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
switch(score){
  case 1:
    
     totalScore['playerScore']+= 1
     totalScoreDiv.innerText = 'Your Score: ' + totalScore['playerScore']
    computerScoreDiv.innerText=  'Computer Score: '+ totalScore['computerScore']
    resultDiv.innerText=''
    break;
    case -1:   
     resultDiv.innerText=''
    totalScoreDiv.innerText = 'Your Score: ' + totalScore['playerScore']
    computerScoreDiv.innerText=  'Computer Score: '+ totalScore['computerScore']
      break;
  case 0:
resultDiv.innerText='DRAW'
    break;
}
 // playerScoreDiv.innerText = 'Your score: ' + score
// totalScore['playerScore'] ++
  if (computerChoice == 'Rock'){
    handsDiv.innerText = 'Computer chose : ' + ' ✊'
  }else if(computerChoice == 'Scissors'){
      handsDiv.innerText = 'Computer chose : ' + ' ✌'
  }else{
    handsDiv.innerText = 'Computer chose :' + ' 🤚'
  }

  const endGameButton = document.getElementById('endGameButton')
  
if(totalScore['playerScore']== 5){
  endGame()
  resultDiv.innerText = 'You Won'
  endGameButton.style.animation ='reset'
}else if(totalScore['computerScore'] == 5){
  endGame()
    resultDiv.innerText = 'Computer Won'
   endGameButton.style.animation ='reset'
}
  


}


function onClickRPS(playerChoice) {
const computerChoice = getComputerChoice()
const score = getResult(playerChoice, computerChoice)
showResult(score, playerChoice, computerChoice)


}
// console.log(totalScore['playerScore'])


function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
 
rpsButtons.forEach(rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton.value)
}
)


  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = ()=>  endGame()
  }



function endGame() {
  const computerScoreDiv = document.getElementById("computerScore")
const totalScoreDiv = document.getElementById("totalScore")
  const playerScoreDiv = document.getElementById('player-score')
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  
  totalScoreDiv.innerText = 'Your Score: 0'
  computerScoreDiv.innerText = 'Computer Score: 0'
  playerScoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''
  totalScore['playerScore'] =0
  totalScore['computerScore']=0
}
playGame()