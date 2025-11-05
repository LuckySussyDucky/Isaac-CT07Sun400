let attempts = 0;
let words = [];

function setup(){
    new Canvas(600, 400);
    background(220);
}

function draw(){
    text("Guess the Word!", width / 2, 50);
    text("Attempts: " + attempts, width, 100);
}