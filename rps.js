const Rock = "Rock";;
const Paper = "Paper";
const Scissors = "Scissors";
const W ="Win!";
const L ="Lost!";
const T ="Draw!";
const err="thats not rignt"
let computerScore=0;
let humanScore=0;
function playGame() {
function getComputerChoice() {
    const Choicearr = [Rock, Paper, Scissors];
    const sel = Math.floor(Math.random()* Choicearr.length);
    return  Choicearr[sel] ;
}   
function getHumanChoice() {
    const shoot = prompt("Rock, Paper, Scissors");
    return shoot.charAt(0).toUpperCase() + shoot.slice(1).toLowerCase();
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("You: "+humanSelection)
console.log("Computer :"+computerSelection)
function  playRound() {
    if (computerSelection==Scissors&&humanSelection==Rock ||
        computerSelection==Rock&&humanSelection==Paper ||
        computerSelection==Paper&&humanSelection==Scissors) {
        return W}
    if (humanSelection==Scissors&&computerSelection==Rock ||
        humanSelection==Rock&&computerSelection==Paper ||
        humanSelection==Paper&&computerSelection==Scissors) {
        return L}
    if (humanSelection==computerSelection||computerSelection===humanSelection){
        return T}
    if (humanSelection!==Rock||Paper||Scissors) {
        return err}
}
if (playRound()==L) {
        computerScore++}
if (playRound()==W) {
        humanScore++}
console.log(playRound());
console.log(humanScore)
console.log(computerScore)
round
}
for (round=0; round<5; round++) {
    playGame()}






