let background;
let bird;
function preload(){
    background = loadImage("assets/background-day.png");
    bird = loadImage("assets/yellowbird-midflap.png");

}

function setup(){
    new Canvas(400, 600);
}

function draw(){
    image(background, 0, 0, width, height);
    image(bird, 200, 300, 30, 30);
}