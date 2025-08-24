let ball;
let floor;
function setup(){
    new Canvas(800, 800);
    background(250);
    world.gravity.y = 10;

    floor = new Sprite(800, 800, 800, 30, "static");
}

function draw(){

    if (mouse.presses("left")){
        ball = new Sprite(mouseX,mouseY,30);
    }
}