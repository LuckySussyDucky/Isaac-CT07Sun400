let attempts = 0;
let words = ["hotel", "river", "house", "mango"];
let hint = "";
let textBox;
let button;
let display;

function setup(){
    new Canvas(600, 400);
    background(220);

    textBox = createInput();
    textBox.position(width / 2 + 380, 300);

    button = createButton("Guess");
    button.position(textBox.x + textBox.width + 30, 300);
    button.mousePressed(displayText);

    hint = random(words)
    console.log(hint);
    hint = hint[0].toUpperCase() + "_ ".repeat(hint.length - 1);
    
}

function draw(){
    textSize(16);
    textAlign(CENTER, TOP);
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hint: " + hint, width / 2, 150);


}

function displayText(){
    display = text
}