let attempts = 0;

function setup(){
    new Canvas(600, 400);
    background(220);
}

function draw(){
    text("Guess the Word!", 200, 300);
    text("Attempts: " + attempts, 250, 80);
}