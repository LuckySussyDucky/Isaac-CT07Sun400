let square;
let squareM;
let circle;
let pipe;
let image;
let age;

function preload(){
    image = loadImage("assets/base.png");
}
function setup(){
    new Canvas(800, 400);
    background(250);
    world.gravity.y = 1

    square = new Sprite(800 / 2, 400 / 2, 25, 25, "static");

    squareM = new Sprite();
    squareM.color = "blue"
    squareM.w = 25;
    squareM.h = 25;
    squareM.collider = "static";

    circle = new Sprite(100, 350, 25, "dynamic");
    circle.bounciness = 0.5;
    circle.colour = "red"

    pipe = new Group();
}

function draw(){
    // while(i === 1){
    //     do a action
    // }

    // for(let i = 0; i < 11; i + 1){
    //     console.log(i);
    // }
    // for(let i = 10; i > 0; i - 1){
    //     console.log(i);
    // }
    // for(let i = 0; i < 11; i + 2){
    //     console.log(i);
    // }
    // for(let i = 1; i < 11; i + 2){
    //     console.log(i);
    // }
    
    if (mouse.presses("left")){
        circle = new Sprite(mouse.x, mouse.y, 25, "dynamic");
        circle.bounciness = 0.5;
        circle.colour = "red"
    }
    squareM.x = mouse.x;
    squareM.y = mouse.y;
}

if(age < 90 && age > 49){
    console.log("You are so old");
}else if(age < 49 && age > 18){
    console.log("You are an adult");
}else{
    console.log("You are a kid")
}