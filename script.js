let btn = document.getElementById("btn");
let number = Math.floor(Math.random() * 100 + 1); //Generates a random number b/w 1 and 100
let chances = 0; //Initial values of chances taken to guess a number
let output = document.getElementById("outputtext");
++chances; //to increment the number of chances taken

btn.addEventListener("click", function () {
  let guess = document.getElementById("userInput").value;

  if (guess > number) {
    output.innerHTML = "Number entered is greater";
    ++chances;
  } else if (guess < number) {
    output.innerHTML = "Number entered is smaller";
    ++chances;
  }

  let score = 100 - chances; //To store the score of your game
  score;
  if (guess == number) {
    output.innerHTML = `Congratulations \n the number entered was ${number} and you guessed it right. \n Your score is ${score}`;
  }
});
