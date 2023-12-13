const prompt = require('prompt-sync')({ sigint: true });

const snake = 0;
const water = 1;
const gun = 2;
const computerInput = Math.floor(Math.random() * 3);
let uscore = 0;
let cscore = 0;

const resultFunc = (computerInput, userInput) => {
    if (computerInput == userInput) {
        return null;
    }
    else if (computerInput == 0 && userInput == 2) {
        uscore++;
        return uscore;
    }
    else if (computerInput == 1 && userInput == 0) {
        uscore++;
        return uscore;
    }
    else if (computerInput == 2 && userInput == 1) {
        uscore++;
        return uscore;
    }
    else {
        cscore++;
        return cscore;
    }
}

console.log('GAME: SNAKE-WATER-GUN');
console.log('HIT Q for QUIT the GAME');
do {

    console.log('\nHit 0 for SNAKE');
    console.log('Hit 1 for WATER');
    console.log('Hit 2 for GUN');

    const userInput = prompt('\nChoose between: snake,water,gun: ');
    if (userInput == 'Q' || userInput == 'q') {
        break;
    }
    else if (userInput > 2) {
        console.log("PLS ENTER VALID VALUE");
        break;
    }
    else {

        if (resultFunc(computerInput, userInput) != null) {
            if (computerInput == 0) {
                console.log("\n");
                console.log("COMPUTER INPUT : SNAKE");
                console.log("COMPUTER SCORE : ", cscore);
                console.log("USER SCORE : ", uscore);
            }
            else if (computerInput == 1) {
                console.log("\n");
                console.log("COMPUTER INPUT : WATER");
                console.log("COMPUTER SCORE : ", cscore);
                console.log("USER SCORE : ", uscore);
            }
            else {
                console.log("\n");
                console.log("COMPUTER INPUT : GUN");
                console.log("COMPUTER SCORE : ", cscore);
                console.log("USER SCORE : ", uscore);
            }
        }
        else {
            console.log("\n** YOU AND COMPUTER CHOSE SAME **")
        }
    }
} while (true);