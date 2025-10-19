let background;
let bird;
function preload(){
    background = loadImage("assets/background-day.png");
    bird = loadImage("assets/yellowbird-midflap.png");

}

function setup(){

}

function draw(){
    Image(background, 0, 0, width, height);
}