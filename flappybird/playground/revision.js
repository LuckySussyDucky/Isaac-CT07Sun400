let square;
function setup(){
    new Canvas(800, 400);
    background(250);
    world.gravity.y = 10;

    square = new Sprite(800 / 2, 400 / 2, 25, 25);
}

function draw(){

    if (mouse.presses("left")){
        ball = new Sprite(mouse.x, mouse.y, 30, "dynamic");
        ball.bounciness = 0.5;
    }
}