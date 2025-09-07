let background, base;
let bird, floor;
let flapDownImg, flapUpImg, flapMidImg;
let bird2;
let pipeGroup; //declare the variable for the group
let pipe; //used to preload the pipe image
let topPipe, bottomPipe;
let gameoverLabel, gameoverImg;
let startScreenLabel, startScreenImg;
let startGame = false;
let score = 0;
let numberImages = [];
let scoreDigits;
let birdImages = [];
let colour = "yellow";
let colourCode = "";
let counter;
let box;

function preload(){ //load the images before the game starts 
    background = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");
    pipe = loadImage("assets/pipe-green.png")
    gameoverImg = loadImage("assets/gameover.png")
    startScreenImg = loadImage("assets/message.png")
    for(let i = 0; i < 10; i++){
      numberImages[i] = loadImage("assets/" + i + ".png")
    }
    for(let i = 0; i < 4; i++){
      if(i === 1){
        colour = "red";
        flapMidImgR = loadImage("assets/" + colour + "bird-midflap.png");
        flapDownImgR = loadImage("assets/" + colour + "bird-downflap.png");
        flapUpImgR = loadImage("assets/" + colour + "bird-upflap.png");
      }else if(i === 2){
        colour = "blue";
        flapMidImgB = loadImage("assets/" + colour + "bird-midflap.png");
        flapDownImgB = loadImage("assets/" + colour + "bird-downflap.png");
        flapUpImgB = loadImage("assets/" + colour + "bird-upflap.png");
      }else if(i === 3){
        colour = "yellow";
        flapMidImgY = loadImage("assets/" + colour + "bird-midflap.png");
        flapDownImgY = loadImage("assets/" + colour + "bird-downflap.png");
        flapUpImgY = loadImage("assets/" + colour + "bird-upflap.png");
      }else{}
    }
}

function setup(){ //must have function
    box = new Sprite(200, 400, 75, 10, "static");
      if(mouse.presses("right"))
      text("Colour: " + colour, 25, 40);
      text("Right click to change colour", 25, 60);

    new Canvas(400, 600);
    bird = new Sprite();
    bird.x = width / 2;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.img = flapMidImgY;
    
    //bird physics
    bird.collider = "static";
    bird.visible = false;
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

    pipeGroup = new Group();

    //set up start message and display
    startScreenLabel = new Sprite();
    startScreenLabel.x = width / 2
    startScreenLabel.y = height / 2;
    startScreenLabel.width = 50;
    startScreenLabel.height = 50;
    startScreenLabel.collider = "none"
    startScreenLabel.img = startScreenImg

    scoreDigits = new Group();
    scoreDigits.collider = "none"
    scoreDigits.layer = 1000;
}

function draw(){ //must have function
    image(background, 0, 0, width, height);

    if(kb.presses("space") || mouse.presses("left")){
      startGame = true;
      startScreenLabel.visible = false;
      bird.visible = true;
    }

    if(startGame || colour === "yellow"){
      bird.x += 3;
      camera.x = bird.x;
      floor.x = camera.x;
      bird.collider = "dynamic";
      if(kb.presses("space") || mouse.presses("left")){
        bird.vel.y = -5;
        bird.sleeping = false;
}

      if (bird.vel.y < -1){
        bird.img = flapUpImgY;
        bird.rotation = -30;
      }else if(bird.vel.y > 1){
        bird.img = flapDownImgY;
        bird.rotation = 30;
      }else{
        bird.img = flapMidImgY;
        bird.rotation = 0;
}

      if(frameCount === 1){
        spawnPipePair();
}

      if (frameCount % 90 === 0){
      spawnPipePair();
}

      // remove off screen pipes
      for (let pipe of pipeGroup){
        if (pipe.x < -50){
          pipe.remove();
  }
}

      drawScore(width / 2, 20, score, 24, 36);

      if(bird.collides(pipeGroup) || bird.collides(floor)){
        gameoverLabel = new Sprite(); // x, y, width, height
        gameoverLabel.x = width / 2;
        gameoverLabel.y = height / 2;
        gameoverLabel.width = 192;
        gameoverLabel.height = 42;
        gameoverLabel.img = gameoverImg;
        gameoverLabel.layer = 100;
        gameoverLabel.x = camera.x;
        noLoop();
}

}else if(colour === "red"){
        bird.x += 3;
        camera.x = bird.x;
        floor.x = camera.x;
        bird.collider = "dynamic";
        if(kb.presses("space") || mouse.presses("left")){
          bird.vel.y = -5;
          bird.sleeping = false;
}

        if (bird.vel.y < -1){
          bird.img = flapUpImgY;
          bird.rotation = -30;
        }else if(bird.vel.y > 1){
            bird.img = flapDownImgY;
            bird.rotation = 30;
        }else{
            bird.img = flapMidImgY;
            bird.rotation = 0;
        }

        if(frameCount === 1){
          spawnPipePair();
        }

       if (frameCount % 90 === 0){
          spawnPipePair();
        }

        // remove off screen pipes
        for (let pipe of pipeGroup){
          if (pipe.x < -50){
            pipe.remove();
          }
        }

        drawScore(width / 2, 20, score, 24, 36);

        if(bird.collides(pipeGroup) || bird.collides(floor)){
          gameoverLabel = new Sprite(); // x, y, width, height
          gameoverLabel.x = width / 2;
          gameoverLabel.y = height / 2;
          gameoverLabel.width = 192;
          gameoverLabel.height = 42;
          gameoverLabel.img = gameoverImg;
          gameoverLabel.layer = 100;
          gameoverLabel.x = camera.x;
          noLoop();
        }

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

function spawnPipePair(){
    let gap = 50;
    let midY = random(250, height - 250);

    //create top pipe
    topPipe = new Sprite(400 + bird.x, midY - gap / 2 - 200, 52, 320, "static");
    topPipe.img = pipe;
    topPipe.rotation = 180;

    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;

    //create bottom pipe
    bottomPipe = new Sprite(400 + bird.x, midY + gap / 2 + 200, 52, 320, "static");
    bottomPipe.img = pipe;

    pipeGroup.add(bottomPipe);
}

function drawScore(x, y, score, digitWidth, digitHeight){
    scoreDigits.removeAll(); //clear old digits sprites
    let scoreStr = str(score);
    let totalWidth = scoreStr.length * digitWidth;
    let startX = x - totalWidth / 2; //state the starting x coordinates

    for (let i = 0; i < scoreStr.length; i++){
      let digit = int(scoreStr[i]);
      let xPos = startX + i * digitWidth;
      let digitSprite = new scoreDigits.Sprite(xPos, y, digitWidth, digitHeight);
      digitSprite.img = numberImages[digit];
    }

    moveGroup(scoreDigits, camera.x, 24);
}

function moveGroup(group, targetX, spacing){
    let totalWidth = (group.length - 1) * spacing;
    let startX = (targetX - totalWidth / 2);
    for (let i = 0; i < group.length; i++){
      group[i].x = startX + i * spacing;
    }
}
    // if(mouse.presses("left")){
    //     bird2 = new Sprite(mouse.x, mouse.y, 30, 30, "dyanmic");
    //     bird2.img = flapMidImg
    // }
    // if(mouse.presses("right")){
    //     bird2 = new Sprite(mouse.x, mouse.y, 30, 30, "static");
    //     bird2.img = flapMidImg
    // }

function spawnPipePair(){
    let gap = 50;
    let midY = random(250, height - 250);

    //create top pipe
    topPipe = new Sprite(400 + bird.x, midY - gap / 2 - 200, 52, 320, "static");
    topPipe.img = pipe;
    topPipe.rotation = 180;

    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;

    //create bottom pipe
    bottomPipe = new Sprite(400 + bird.x, midY + gap / 2 + 200, 52, 320, "static");
    bottomPipe.img = pipe;

    pipeGroup.add(bottomPipe);
}

function drawScore(x, y, score, digitWidth, digitHeight){
    scoreDigits.removeAll(); //clear old digits sprites
    let scoreStr = str(score);
    let totalWidth = scoreStr.length * digitWidth;
    let startX = x - totalWidth / 2; //state the starting x coordinates

    for (let i = 0; i < scoreStr.length; i++){
      let digit = int(scoreStr[i]);
      let xPos = startX + i * digitWidth;
      let digitSprite = new scoreDigits.Sprite(xPos, y, digitWidth, digitHeight);
      digitSprite.img = numberImages[digit];
    }

    moveGroup(scoreDigits, camera.x, 24);
}

function moveGroup(group, targetX, spacing){
    let totalWidth = (group.length - 1) * spacing;
    let startX = (targetX - totalWidth / 2);
    for (let i = 0; i < group.length; i++){
      group[i].x = startX + i * spacing;
    }

}