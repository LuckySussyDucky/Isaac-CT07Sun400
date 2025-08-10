let background, base, flapMidImg;
let bird, floor;
let bird2;

function preload(){ //load the images before the game starts 
    background = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");
    flapMidImg = loadImage("assets/yellowbird-midflap.png");
    flapDownImg = loadImage("assets/yellowbird-downflap.png");
    flapUpImg = loadImage("assets/yellowbird-upflap.png")
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

    floor = new Sprite();
    floor.x = 200;
    floor.y = height - 20;
    floor.width = 400;
    floor.height = 125;
    floor.collider = "static";
    floor.img = base;

}

function draw(){ //must have function
    image(background, 0, 0, width, height);
    if(kb.presses("space")){
        bird.vel.y = -5;
        bird.sleeping = false;
    }

    if (bird.vel.y < -1){
        bird.img = flapUpImg
        bird.rotation = -30;
    }else if(bird.vel.y > -1){
        
    }

    // if(mouse.presses("left")){
    //     bird2 = new Sprite(mouse.x, mouse.y, 30, 30, "dyanmic");
    //     bird2.img = flapMidImg
    // }
    // if(mouse.presses("right")){
    //     bird2 = new Sprite(mouse.x, mouse.y, 30, 30, "static");
    //     bird2.img = flapMidImg
    // }

}
