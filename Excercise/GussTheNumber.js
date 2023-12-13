//specify prompt module
const prompt = require("prompt-sync")({ sigint: true });

//Generate random number
const randomNumber = Number.parseInt(Math.random() * 100);
let attempt = 100;
do {
    //Take number from user
    console.log("Guess the number");
    console.log("Hit Q for Quit game\n");
    const choosenNumber = prompt("Enter a number between 1 to 100: ");
    if (choosenNumber == 'q' || choosenNumber == 'Q') {
        break;
    }
    else {
        parseNumber = Number.parseInt(choosenNumber);
        if (parseNumber <= 100) {
            //Check the condition
            if (parseNumber == randomNumber) {
                attempt--;
                console.log("You chose correct number: ", randomNumber);
                console.log("**Your scored out of 10: ", Number.parseInt(attempt / 10), "**");
                console.log("Attempt remainig: ", attempt, "\n");
                break;
            }
            else if (parseNumber < randomNumber) {
                attempt--;
                console.log("Attempt remainig: ", attempt);
                console.log("|| You chose less than actual number ||\n");
            }
            else if (parseNumber > randomNumber) {
                attempt--;
                console.log("Attempt remainig: ", attempt);
                console.log("|| You chose grater than actual number ||\n");
            }
        }
        else {
            console.log("You have to choose number between 1 to 100");
        }
    }
} while (true);