let dojoBG;
function preload() {
    dojoBG = loadImage("assets/dojobackground.jpg");
}

function setup() {
    new Canvas(800, 600);
    background(250);
}

function draw() {
    image(dojoBG, 0, 0, width, height);
}