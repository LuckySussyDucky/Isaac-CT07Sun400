let attempts = 0;
let words = ["hotel", "river", "house"];
let hint = "";
let textBox;
let button;

function setup(){
    new Canvas(600, 400);
    background(220);

    textBox = createInput();
    textBox.position(width / 2 + 380, 300);

    button = createButton("Guess");
    button.position(textBox.x + textBox.width + 30, 300);

    hint = random
    
}

function draw(){
    textSize(16);
    textAlign(CENTER, TOP);
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hint: " + hint, width / 2, 150);


}