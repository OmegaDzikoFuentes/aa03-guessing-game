const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber;

let numOfAttempts = 5;

const askGuess = () => { rl.question('Please enter a Guess ', (answer) => {
  // TODO: check number passed in by  user with guess function
 if(!checkGuess(Number(answer))) {

    console.log("...try again");

    numOfAttempts--;

    console.log(`you have ${numOfAttempts} guesses left >__< `)

   askGuess();

 }

 if(checkGuess(Number(answer))) {

    checkGuess(Number(answer));

    console.log("You WiN!!!");

    rl.close();

 } else if(numOfAttempts === 0) {

    console.log("You know what sexy, maybe next time ;) ")

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

// const randomInRange = (min, max) => {

//     const minCeiled = Math.ceil(min);

//     const maxFloored = Math.floor(max);

//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

// }

// const secretNumber = randomInRange();

const askRange = () => {

    // ask question one
rl.question("Please enter a Max number ", firstAnswer => {
    console.log(firstAnswer + " is your max.");

  // ask question two
  rl.question("Please enter Minimum number ", secondAnswer => {
    console.log(secondAnswer + " is your min.");

    console.log(`I'm thinking of number between ${secondAnswer} and ${firstAnswer}...`);


  const randomInRange = (min, max) => {

    const minCeiled = Math.ceil(min);

    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

}

secretNumber = randomInRange(Number(secondAnswer), Number(firstAnswer));

askGuess();


});
  });

}

askRange();
