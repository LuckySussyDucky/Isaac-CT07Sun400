let dojoBG;
let fruitGroup;
let fruitTypes = [];
function preload() {
    let peach = {
        whole : loadImage("assets/peachwhole.png"),
    }
    let watermelon = {
        whole : loadImage("assets/watermelonwhole.png"),
    }
    dojoBG = loadImage("assets/dojobackground.png");
}

function setup() {
    new Canvas(800, 600);
    background(250);
    world.gravity.y = 10;
    fruitGroup = new Group();
}

function draw() {
    clear();
    image(dojoBG, 0, 0, width, height);   

    if(frameCount % 120 === 0){
        spawnFruit();
    }
}

function spawnFruit(){
    let fruitData = random(fruitTypes);
    let randomX = random(300, 500);
    let fruit = new fruitGroup.Sprite(randomX, height + 20, 40);
    fruit.image = fruitData.whole;
    fruit.vel.y = random(-10, -14);
    fruit.vel.x = random(-2, 2);
    fruit.friction = 0;

}