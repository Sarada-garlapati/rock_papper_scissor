const choices=["rock" ,"paper","scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const player=document.getElementById("player");
const computer=document.getElementById("computer");
let player1=0;
let computer1=0;


function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random() * 3)];
    let result="";
    if(playerChoice===computerChoice){
        result="IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissor")?"YOU WIN!" :"YOU LOOSE!";
                break;
                case "paper":
                result=(computerChoice==="rock")?"YOU WIN!" :"YOU LOOSE!";
                break;
                case "scissor":
                result=(computerChoice==="paper")?"YOU WIN!" :"YOU LOOSE!";
                break;
        }

    }

    playerDisplay.textContent=`Player: ${playerChoice}`;
    computerDisplay.textContent=`Computer: ${computerChoice}`;
    resultDisplay.textContent=result;
 

    resultDisplay.classList.remove("greenText","redText");
    
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            player1++;
            player.textContent=player1;
            break;
        case "YOU LOOSE!":
            resultDisplay.classList.add("redText");
            computer1++;
            computer.textContent=computer1;
           break;
                    
    }


}