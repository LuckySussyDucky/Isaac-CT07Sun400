let attempts = 0;

function setup(){
    new Canvas(600, 400);
    background(220);
}

function draw(){
    text("Guess the Word!", width / 2, height / 2);
    text("Attempts: " + attempts, 250, 80);
}