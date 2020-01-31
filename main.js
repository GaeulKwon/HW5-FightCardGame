


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("NEXT").style.visibility = "hidden";
  let playerArray = [];
  let computerArray = [];
  
  document.getElementById("DEAL").addEventListener("click", function(){
  deck.cardArray.length = 0;
  document.getElementById("PlayerScore").innerHTML = "";
  document.getElementById("ComputerScore").innerHTML = "";
  document.getElementById("PlayerCard").innerHTML = "";
  document.getElementById("ComputerCard").innerHTML = "";
  document.getElementById("turnDisplay").innerHTML = "0";
  deck.load();
  
  let i;
  let random;
  
  for(i = 0; i < 26; i++){
  random = Math.floor(Math.random() * (52));
  while (deck.cardArray[random].inuse === true) {
  random = Math.floor(Math.random() * (52));
  }
  playerArray[i] = deck.cardArray[random];
  deck.cardArray[random].inuse = true;
  
  random = Math.floor(Math.random() * (52));
  while (deck.cardArray[random].inuse === true){
  random = Math.floor(Math.random() * (52));
  }
  computerArray[i] = deck.cardArray[random];
  deck.cardArray[random].inuse = true;
  }
  
  document.getElementById("DEAL").style.visibility = "hidden";
  document.getElementById("NEXT").style.visibility = "visible";
  
  });
  
  
  document.getElementById("NEXT").addEventListener("click", function(){
  let turnDisplay = Number(document.getElementById("turnDisplay").innerHTML);
  
  let playerScore = Number(document.getElementById("PlayerScore").innerHTML);
  let computerScore = Number(document.getElementById("ComputerScore").innerHTML);
  
  let playerCardElement = document.getElementById("PlayerCard");
  let computerCardElement = document.getElementById("ComputerCard");
  
  playerCardElement.innerHTML = rankConvert(playerArray[turnDisplay].rank) + " " + suitConvert(playerArray[turnDisplay].suit);
  if (playerArray[turnDisplay].suit === 1 || playerArray[turnDisplay].suit === 2){
  playerCardElement.className = "cardBlack";
  } else {
  playerCardElement.className = "cardRed";
  }
  if (computerArray[turnDisplay].suit === 1 || computerArray[turnDisplay].suit === 2){
  computerCardElement.className = "cardBlack";
  } else {
  computerCardElement.className = "cardRed";
  }
  
  computerCardElement.innerHTML = rankConvert(computerArray[turnDisplay].rank) + " " + suitConvert(computerArray[turnDisplay].suit);
  
  if (playerArray[turnDisplay].rank > computerArray[turnDisplay].rank) {
  playerScore++;
  document.getElementById("winning").innerHTML = "You won!";
  }
  if (playerArray[turnDisplay].rank < computerArray[turnDisplay].rank) {
  computerScore++;
  document.getElementById("winning").innerHTML = "You lost..";
  }
  
  if (playerArray[turnDisplay].rank === computerArray[turnDisplay].rank) {
  if (playerArray[turnDisplay].suit > computerArray[turnDisplay].suit) {
  playerScore++;
  document.getElementById("winning").innerHTML = "You won!";
  } else {
  computerScore++;
  document.getElementById("winning").innerHTML = "You lost..";
  }
  }
  
  document.getElementById("PlayerScore").innerHTML = playerScore;
  document.getElementById("ComputerScore").innerHTML = computerScore;
  
  if (++turnDisplay === 26) {
  if (playerScore > computerScore){
  document.getElementById("winning").innerHTML = "Game Over. You won!";
  }
  if (playerScore < computerScore){
  document.getElementById("winning").innerHTML = "Game Over. You lost.";
  }
  if (playerScore === computerScore){
  document.getElementById("winning").innerHTML = "Game Over. It's a tie.";
  }
  document.getElementById("NEXT").style.visibility = "hidden";
  document.getElementById("DEAL").style.visibility = "visible";
  }
  document.getElementById("turnDisplay").innerHTML = turnDisplay;
  });
  
  function suitConvert(someSuit) {
  switch (someSuit) {
  case 1:
  return "SPADE";
  break;
  case 2:
  return "CLUB";
  break;
  case 3:
  return "DIAMOND";
  break;
  case 4:
  return "HEART";
  break;
  }
  };
  function rankConvert(someRank) {
  switch (someRank) {
  case 2:
  return "2";
  break;
  case 3:
  return "3";
  break;
  case 4:
  return "4";
  break;
  case 5:
  return "5";
  break;
  case 6:
  return "6";
  break;
  case 7:
  return "7";
  break;
  case 8:
  return "8";
  break;
  case 9:
  return "9";
  break;
  case 10:
  return "2";
  break;
  case 11:
  return "JACK";
  break;
  case 12:
  return "QUEEN";
  break;
  case 13:
  return "KING";
  break;
  case 14:
  return "ACE";
  break;
  }
  }
  });
  
  