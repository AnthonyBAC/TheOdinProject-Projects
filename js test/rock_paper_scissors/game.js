let humanScore = 0
let computerScore = 0

function getComputerChoice(choice1,choice2,choice3){
    const random = Math.floor(Math.random() * 3);
    const choices = [choice1,choice2,choice3];
    return choices[random]
}

function getHumanChoice(choice){
    while (true) {
        choice = prompt("Choose your option:\n1. Rock\n2. Paper\n3. Scissors");
        if (choice  === null){
            return null;
        }else if (
            choice === "1" || 
            choice === "2" || 
            choice === "3" ) {
            break; 
        } else {
            alert("Invalid choice, please choose 1, 2, or 3")
              
        }
    }
    if (choice === "1") {
        return "rock";
    } else if (choice === "2") {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
        return "You win! rock beats scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
        return "You win! paper beats rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        return "You win! scissors beats paper";
    } else {
        computerScore += 1
        return "You lose";
    }
}

function playGame(){
    
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice()
        if (humanChoice === null) {
            console.log("Game was closed");
            return;
        }
        const computerChoice = getComputerChoice("rock","paper","scissors")
        console.log("Round " + (i + 1) + ":")
        console.log("Computer Choicer: " + computerChoice);
        console.log("Human Choice: " + humanChoice);
        const result = playRound(humanChoice,computerChoice)
        console.log("User Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
        console.log(result)
        console.log("-----------------------------------")
        }
        
    if (humanScore > computerScore) {
        console.log("User win the game")
    } else if (humanScore < computerScore) {
         console.log("Computer win the game")
    } else {
        console.log("Tie, Both loosers")
    }   
} playGame()






