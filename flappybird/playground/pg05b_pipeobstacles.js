let background, base;
let bird, birdRed, birdYellow, floor;
let flapDownImgY, flapUpImgY, flapMidImgY, flapDownImgB, flapUpImgB, flapMidImgB, flapDownImgR, flapUpImgR, flapMidImgR;
// let bird2;
let pipeGroup; //declare the variable for the group
let pipe; //used to preload the pipe image
let topPipe, bottomPipe;
let box;

function preload(){ //load the images before the game starts 
    background = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");
    flapMidImgY = loadImage("assets/yellowbird-midflap.png");
    flapDownImgY = loadImage("assets/yellowbird-downflap.png");
    flapUpImgY = loadImage("assets/yellowbird-upflap.png");
    flapMidImgB = loadImage("assets/bluebird-midflap.png");
    flapDownImgB = loadImage("assets/bluebird-downflap.png");
    flapUpImgB = loadImage("assets/bluebird-upflap.png");
    flapMidImgR = loadImage("assets/redbird-midflap.png");
    flapDownImgR = loadImage("assets/redbird-downflap.png");
    flapUpImgR = loadImage("assets/redbird-upflap.png");
    pipe = loadImage("assets/pipe-green.png");
}

function setup(){ //must have function
    new Canvas(400, 600);
    bird = new Sprite();
    bird.x = width / 2;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.img = flapMidImg;
    
    //bird physics
    bird.collider = "dynamic";
    bird.mass = 2;
    bird.drag = 0.02;
    bird.bounciness = 0.5;
    world.gravity.y = 10

    birdRed = new Sprite(width / 2, );

    floor = new Sprite();
    floor.x = 200;
    floor.y = height - 20;
    floor.width = 400;
    floor.height = 125;
    floor.collider = "static";
    floor.img = base;

    box = new Sprite();
    box.x = width / 2;
    box.y = height / 2;
    box.width = 200;
    box.height = 200;
    box.collider = "none";

    pipeGroup = new Group();
}

function draw(){ //must have function
    image(background, 0, 0, width, height);
    if(kb.presses("space") || mouse.presses("left")){
        bird.vel.y = -5;
        bird.sleeping = false;
    }

    if (bird.vel.y < -1){
        bird.img = flapUpImg;
        bird.rotation = -30;
    }else if(bird.vel.y > 1){
        bird.img = flapDownImg;
        bird.rotation = 30;
    }else{
        bird.img = flapMidImg;
        bird.rotation = 0;
    }

    if(frameCount === 1){
        spawnPipePair();
    }

    if(mouse.presses("left")){
        box.visible = true;

    }
    if(mouse.presses("right")){
        box.visible = false;
    }

}

function spawnPipePair(){
    let gap = 50;
    let midY = height / 2;

    //create top pipe
    topPipe = new Sprite(400, midY - gap / 2 - 200, 52, 320, "static"); 
    topPipe.img = pipe;
    topPipe.rotation = 180;

    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;

    //create bottom pipe
    bottomPipe = new Sprite(400, midY + gap / 2 + 200, 52, 320, "static");
    bottomPipe.img = pipe;

    pipeGroup.add(bottomPipe);
}