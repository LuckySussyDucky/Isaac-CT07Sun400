let ball;
let floor;
function setup(){
    new Canvas(800, 800);
    world.gravity.y = 10;

    floor = new Sprite(0, 800, 800, 30, "static");
}

function draw(){
    if (mouse.presses("left")){
        ball = new Sprite(mouseX,mouseY,);
    }
}