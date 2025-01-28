function getComputerChoice(choice1,choice2,choice3){
    const random = Math.floor(Math.random() * 3);
    const choices = [choice1,choice2,choice3];
    return choices[random]
}

function getHumanChoice(choice){
    choice = prompt("Choose your option")
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
        return "You win! Rock beats scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
        return "You win! Paper beats rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        return "You win! Scissors beats paper.";
    } else {
        computerScore += 1
        return "You lose!";
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice()
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
            console.log("Both loosers")
        }   
} playGame()


let humanScore = 0
let computerScore = 0









