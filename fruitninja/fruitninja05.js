let dojoBG;
let fruitGroup;
let fruitTypes = [];
let splashEffect = [];
let trail;
let fruitHalves;
let score = 0;
let missed = 0;
let gameTimer = 0;
let startTime = 0;
let gameduration = 10;
let gameState = "start";
let difficultyNumFruits = 1;
1
function preload(){
    let peach = {
        whole : loadImage("assets/peachwhole.png"),
        half1 : loadImage("assets/peachhalf.png"),
        half2 : loadImage("assets/peachhalf2.png"),
        splash : loadImage("assets/peachsplash.png")

    }
    let watermelon = {
        whole : loadImage("assets/watermelonwhole.png"),
        half1 : loadImage("assets/watermelonhalf.png"),
        half2 : loadImage("assets/watermelonhalf.png"),
        splash : loadImage("assets/watermelonsplash.png")
    }
    fruitTypes = [peach, watermelon];
    dojoBG = loadImage("assets/dojobackground.png");
    bgtrack = createAudio("assets/fruit-ninja-bgtrack.mp3");
    combo = createAudio("assets/fruit-ninja-combo.mp3");
    
}


function setup(){
    new Canvas(800, 600);
    background(250);
    world.gravity.y = 10;
    fruitGroup = new Group();
    fruitHalves = new Group();
}



function draw(){
    clear();
    image(dojoBG, 0, 0, width, height);   

    if((kb.presses(" ") || mouse.presses("left")) && (gameState === "start")){
        gameState = "play";
        score = 0;
        missed = 0;
        fruitGroup.removeAll();
        fruitHalves.removeAll();
        bgtrack.loop();
        return;
    }

    if(gameState === "start"){
        fill(0, 180);
        rect(0, 0, width, height);

        fill(255);
        textSize(48);
        textAlign(CENTER, CENTER);
        textFont("Fredoka One");
        text("Fruit Ninja", width / 2, height / 2);
        
        textSize(24);
        textAlign(CENTER, CENTER);
        textFont("Fredoka One");
        text("Click to Start", width / 2, height / 2 + 50);

        gameTimer = floor((millis() - startTime) / 1000);
        text("Time: " + (gameduration - gameTimer), 10, 50);
        if(gameTimer >= gameduration){
            gameState = "gameover";
            return;
    }

    if(gameState === "gameover"){
        bgtrack.stop();
        fill(0, 180);
        rect(0, 0, width, height);

        fill(255);
        textSize(48);
        textAlign(CENTER, CENTER);
        textFont("Fredoka One");
        textColor = "red";
        text("Game Over", width / 2, height / 2);
    }

    if(frameCount % 120 === 0){
        spawnFruit();
    }

    if(mouse.pressing()){
        trail = new Sprite(mouse.x, mouse.y, 7);
        trail.collider = "none";
        trail.color = "red";
        trail.life = 10;
        slicefruit();
        displaySplash();
    }
    
    for(fruit of fruitGroup){
        if(fruit.y > height + 40){
            missed += 1;
            fruit.remove();
        }
    }

    stroke(158, 69, 69);
    fill("255");
    textSize(24);
    textAlign(LEFT, TOP);
    textFont("Fredoka One");
    text("Missed: " + missed, 10, 30);

    stroke(158, 69, 69);
    fill("255");
    textSize(24);
    textAlign(LEFT, TOP);
    textFont("Fredoka One");
    text("Time: " + time, 10, 50);

    }
}

function spawnFruit(){
    let fruitData = random(fruitTypes);
    let randomX = random(300, 500);
    let fruit = new fruitGroup.Sprite(randomX, height + 20, 40);
    fruit.type = fruitData;
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
        let distance = dist(mouse.x, mouse.y, fruit.x, fruit.y);
        if(distance < fruit.diameter / 2 + 5){
            fruit.sliced = true;
            combo.play();
            const fruitX = fruit.x;
            const fruitY = fruit.y;
            fruit.remove();
            splitFruit(fruitX, fruitY, fruit.type);
            score += 1;
            break;
        }
    }
}


function splitFruit(x, y, fruitData){
    let left = new fruitHalves.Sprite(x - 10, y, 40, 40);
    left.img = fruitData.half1;
    left.vel.x = -3;
    left.vel.y = random(-5, -2);
    left.rotationSpeed = -5;
    left.life = 30;

    let right = new fruitHalves.Sprite(x - 10, y, 40, 40);
    right.img = fruitData.half2;
    right.vel.x = 3;
    right.vel.y = random(-5, -2);
    right.rotationSpeed = 5;
    right.life = 30;

    splashEffect.push({
        x : x,
        y : y,
        img : fruitData.splash,
        size : 80,
        life : 30
    })
}



function displaySplash(){
    for(let i = splashEffect.length - 1; i >= 0; i--){
        let splash = splashEffect[i];
        push();
        imageMode(CENTER);
        tint(255, map(splash.life, 0, 30, 0, 255)); //fade out splash
        image(splash.img, splash.x, splash.y, splash.size, splash.size);
        pop();

    splash.life--;
    if(splash.life <= 0){
        splashEffect.splice(i, 1);
        }
    }
}