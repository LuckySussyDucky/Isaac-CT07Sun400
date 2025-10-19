let background;
let bird;
function preload(){
    background = loadImage("assets/background-day.png");
    bird = loadImage("assets/yellowbird-midflap.png");

}

function setup(){
    new Canvas(400, 600);
    world.gravity.y = 10;
}

function draw(){
    image(background, 0, 0, width, height);
    image(bird, 200, 300, 40, 30);

    if(mouse.presses("left"))
}