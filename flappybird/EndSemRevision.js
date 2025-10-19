let background;
let bird;
function preload(){
    background = loadImage("assets/background-day.png");
    bird = loadImage("assets/yellowbird-midflap.png");

}

function setup(){
    new Canvas(400, 600);

    bird.x = 200;
    bird.y = 300;
    bird.width = 40;
    bird.height = 30;
}

function draw(){
    image(background, 0, 0, width, height);
    image(bird, 200, 300, 40, 30);
}