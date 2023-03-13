
//              0    1    2
var choices = ["r", "p", "s"];
var rounds = 0;
var userChoice = prompt("Please pick 'r', 'p', 's':")

var userScore = 0;
var computerScore = 0;

console.log("User Choice: ",userChoice)



var index = Math.floor(Math.random() *  choices.length);
var computerChoice = choices[index];

console.log("Computer Choice: ",computerChoice)

if(userChoice === userChoice){
    ++rounds
}

if(rounds == 5 && userScore === computerScore){
    alert("It's a draw")
}

if(userChoice == "r"  && computerChoice == "r"){
    {userScore ++,computerScore ++}
}
else if(userChoice == "s"  && computerChoice == "s"){
    {userScore ++,computerScore ++}
}
else if(userChoice == "p"  && computerChoice == "p"){
    {userScore ++,computerScore ++}
}
//User Scores
else if(userChoice == "r"  && computerChoice == "s"){
    {userScore ++}
}
else if(userChoice == "s"  && computerChoice == "p"){
    {userScore ++}
}
else if(userChoice == "p"  && computerChoice == "r"){
    {userScore ++}
}
//Computer Scores
else if(userChoice == "r"  && computerChoice == "p"){
    {computerScore ++}
}
else if(userChoice == "s"  && computerChoice == "r"){
    {computerScore ++}
}
else if(userChoice == "p"  && computerChoice == "s"){
    {computerScore ++}
}

// Result
if(userScore == computerScore){
    alert("You Tied This Round!");
}
else if (userScore > computerScore){
    alert("You Won This Round!");
} else {
    alert("You Lost This Round!");
}


console.log("User Score: ", userScore);
console.log("Computer Score: ", computerScore);


confirm("Thanks for Playing!");
