let ball;
let floor;
function setup(){
    new Canvas(800, 400);
    background(250);
    world.gravity.y = 10;

    floor = new Sprite(400, 800, 800, 30, "static");
}

function draw(){

    if (mouse.presses("left")){
        ball = new Sprite(mouse.x, mouse.y, 30, "dynamic");
        ball.bounciness = 0.5;
    }
}