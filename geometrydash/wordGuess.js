let attempts = 0;
let words = [];
let hiddenWord = "";
let hint = "";

function setup(){
    new Canvas(600, 400);
    background(220);

    
}

function draw(){
    textSize(16);
    textAlign(CENTER, TOP);
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width / 2, 100);
    text("Hint: " + hint, width / 2, 150);


}