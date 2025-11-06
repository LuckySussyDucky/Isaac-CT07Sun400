let attempts = 0;
let words = ["table","about","yacht","magic","faith","vague","under","zebra","ocean","gamer","radio","wager","habit","bacon","dance","cabin","sadly","judge","ideal","naked","major","labor","taken","quick","raise","badge","dairy","zeros","false","hairy","after","wagon","party","safer","cable","valid","yield","named","image","unite","nasty","quiet","imply","baker","tales","zesty","early","waist","often","value","unity","young","range","daily","fancy","maker","canoe","candy","youth","hands","maple","quilt","basic","index","older","talks","giant","waste","agent","lakes","zonal","joint","saint","patch","rapid","vapor","knife","fault","quota","ratio","laser","dealt","pause","handy","watch","urban","beach","gifts","ebony","vault"];
let hiddenWord = "";
let textBox;
let button;
let display = "";
let answer;

function setup(){
    new Canvas(600, 400);
    background(220);

    textBox = createInput();
    textBox.position(width / 2 + 380, 300);

    button = createButton("Guess");
    button.position(textBox.x + textBox.width + 30, 300);
    button.mousePressed(checkGuess);

    hiddenWord = random(words)
    console.log(hiddenWord);
    hiddenWord = hiddenWord[0].toUpperCase() + "_ ".repeat(hiddenWord.length - 1);
    
    getCorrectLetters(textBox.value(), hiddenWord)

    textSize(16);
    textAlign(CENTER, TOP);
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hint: " + hiddenWord, width / 2, 150);
    text(display, width / 2, 200);
}

function draw(){


}

function checkGuess() {
    let guess = textBox.value().toLowerCase();
    attempts++;

    if (guess === hiddenWord) {
        message = "Correct! The word was '" + hiddenWord.toUpperCase() + "'!";
    } 
    else if (guess.length != 5){
        message = "5 letter words only."
    }
    else {
        let correctLetters = getCorrectLetters(guess, hiddenWord);
        message = "Wrong! Correct letters: " + correctLetters;
    }
}

function getCorrectLetters(guess, word) {
    let correctLetters = "";
    for (let i = 0; i < word.length; i++) {
        if (word.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
            correctLetters += guess[i].toUpperCase() + " ";
        }
    }
    return correctLetters;
}


////////////////////////////////////////////////////////////

// function setup() {
//     createCanvas(600, 400);
//     textSize(24);
//     textAlign(CENTER, CENTER);

//     // Select a random 5-letter word
//     hiddenWord = random(words);

//     // Create the display text with the first letter visible but last letter hidden
//     displayText = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length - 1);

//     // Create input box
//     inputBox = createInput();
//     inputBox.size(150, 30);
//     inputBox.style("font-size", "20px");
//     inputBox.position(width / 2 - 80, height / 2 + 20);

//     // Create submit button
//     submitButton = createButton("Guess");
//     submitButton.position(width / 2 + 100, height / 2 + 20);
//     submitButton.size(150, 30);
//     submitButton.style("font-size", "20px");
//     submitButton.mousePressed(checkGuess);
// }

// function draw() {
//     background(220);

//     fill(0);
//     text("Guess the Hidden Word!", width / 2, height / 6);
//     text("Attempts: " + attempts, width / 2, height / 4);

//     // Display hint: first letter and underscores
//     text("Hint: " + displayText, width / 2, height / 3);
    
//     text(message, width / 2, height - 50);
// }

// function checkGuess() {
//     let guess = inputBox.value().toLowerCase();
//     attempts++;

//     if (guess === hiddenWord) {
//         message = "Correct! The word was '" + hiddenWord.toUpperCase() + "'!";
//     } 
//     else if (guess.length != 5){
//         message = "5 letter words only."
//     }
//     else {
//         let correctLetters = getCorrectLetters(guess, hiddenWord);
//         message = "Wrong! Correct letters: " + correctLetters;
//     }
// }

// // Function to get the list of correct letters 
// function getCorrectLetters(guess, word) {
//     let correctLetters = "";
//     for (let i = 0; i < word.length; i++) {

//         if (word.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase() + " ";
//         }
//     }
//     return correctLetters;
// }