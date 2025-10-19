let background;
let bird;
let midflap;
let circle;
function preload(){
    background = loadImage("assets/background-day.png");
    midflap = loadImage("assets/yellowbird-midflap.png");

}

function setup(){
    new Canvas(400, 600);
    world.gravity.y = 1;

    bird = new Sprite();
    bird.x = width / 2;
    bird.y = height / 2;
    bird.width = 40;
    bird.height = 30;
    bird.img = midflap;
    bird.collider = "dynamic";

    circle = new Sprite();
    circle.x = width / 2;
    circle.y = height / 2 + 100;
    circle.width = 50;
    circle.height = 50;
    circle.collider = "dynamic";
}

function draw(){
    image(background, 0, 0, width, height);
    
    if(mouse.presses("left") || kb.presses("space")){
        bird.vel.y = bird.vel.y - 1;
    }
}