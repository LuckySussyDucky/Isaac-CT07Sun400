let attempts = 0;
let words = [];
let hint = "";
let textBox;
let button;

function setup(){
    new Canvas(600, 400);
    background(220);

    textBox = createInput();
    textBox.position(width / 2 + 377.5, 300);

    button = createButton();
    button.position(textBox.x + textBox.width + 30, 300);
    
}

function draw(){
    textSize(16);
    textAlign(CENTER, TOP);
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hint: " + hint, width / 2, 150);


}