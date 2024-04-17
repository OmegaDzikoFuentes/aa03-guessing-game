const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


const askGuess = () => { rl.question('Please enter a Guess ', (answer) => {
  // TODO: check number passed in by  user with guess function
 if(!checkGuess(Number(answer))) {

    console.log("...try again");

   askGuess();

 }

 if(checkGuess(Number(answer))) {

    checkGuess(Number(answer));

    console.log("You WiN!!!");

    rl.close();

 }
});
};

const checkGuess = (num) => {

    if(num > secretNumber) {

        console.log("Too High!!");

        return false;

    } else if(num < secretNumber) {

        console.log("Too Low!!");

        return false;

    } else if (num === secretNumber) {

        console.log("Correct!!");

        return true;

    }
}

const randomInRange = () => {

    const minCeiled = Math.ceil(0);

    const maxFloored = Math.floor(100);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

}

const secretNumber = randomInRange();

console.log(secretNumber);

askGuess();
