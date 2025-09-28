let dojoBG;
let fruitGroup;
let fruitTypes = [];
let trail;
function preload() {
    let peach = {
        whole : loadImage("assets/peachwhole.png"),
    }
    let watermelon = {
        whole : loadImage("assets/watermelonwhole.png"),
    }
    fruitTypes = [peach, watermelon];
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

    if(mouse.pressing()){
    trail = new Sprite(mouse.x, mouse.y, 7);
    trail.collider = "none";
    trail.color = "red";
    trail.life = 10;
    slicefruit();
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


function slicefruit(){
    for(let fruit of fruitGroup){
        if(fruit.sliced){
            continue;
        }
        dist(mouse.x, mouse.y, fruit.x, fruit.y);
        if(distance < fruitD / 2){
            return true;
    }
}
}