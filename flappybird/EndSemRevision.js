let background;
let bird;
let midflap;
let circle;
let floor;
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
    bird.collider = "static";

    circle = new Sprite(width / 2, height / 2, 30);
    circle.collider = "dynamic";
    circle.bounciness = 0.75;

    floor = new Sprite(width / 2, height - 10, 100, 50);
    floor.collider = "static";

}

function draw(){
    image(background, 0, 0, width, height);
    
    if(mouse.presses("left") || kb.presses("space")){
        bird.vel.y = bird.vel.y - 1;
    }
}