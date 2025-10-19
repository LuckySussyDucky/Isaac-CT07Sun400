let background;
let bird;
let midflap;
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
}

function draw(){
    image(background, 0, 0, width, height);
    
    if(mouse.presses("left")){
        bird.y = bird.y - 50;
    }
}