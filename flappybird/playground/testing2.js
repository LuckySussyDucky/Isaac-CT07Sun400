let background, base;
let bird, floor;
let flapDownImg, flapUpImg, flapMidImg;
let pipeGroup;
let pipe;
let topPipe, bottomPipe;
let gameoverLabel, gameoverImg;
let startScreenLabel, startScreenImg;
let score = 0;
let numberImages = [];
let scoreDigits;
let birdColor = "red";
let menuMode = true;
let startGame = false;
let currentMenuOption = 0;
let birdColors = ["red", "blue", "yellow"];
let selectedColorIndex = 0;

function preload() {
  background = loadImage("assets/background-day.png");
  base = loadImage("assets/base.png");
  pipe = loadImage("assets/pipe-green.png");
  gameoverImg = loadImage("assets/gameover.png");
  startScreenImg = loadImage("assets/message.png");

  for (let i = 0; i < 10; i++) {
    numberImages[i] = loadImage("assets/" + i + ".png");
  }

  // Load all bird colors initially
  for (let color of birdColors) {
    loadImage("assets/" + color + "bird-midflap.png");
    loadImage("assets/" + color + "bird-downflap.png");
    loadImage("assets/" + color + "bird-upflap.png");
  }
}

function loadBirdImages() {
  flapMidImg = loadImage("assets/" + birdColor + "bird-midflap.png");
  flapDownImg = loadImage("assets/" + birdColor + "bird-downflap.png");
  flapUpImg = loadImage("assets/" + birdColor + "bird-upflap.png");
}

function setup() {
  new Canvas(400, 600);
  loadBirdImages();

  bird = new Sprite();
  bird.x = width / 2;
  bird.y = 200;
  bird.width = 30;
  bird.height = 30;
  bird.img = flapMidImg;
  bird.collider = "static";
  bird.visible = false;
  bird.mass = 2;
  bird.drag = 0.02;
  bird.bounciness = 0.5;
  world.gravity.y = 10;

  floor = new Sprite();
  floor.x = 200;
  floor.y = height - 20;
  floor.width = 400;
  floor.height = 125;
  floor.collider = "static";
  floor.img = base;

  pipeGroup = new Group();
  pipeGroup.layer = 0;

  scoreDigits = new Group();
  scoreDigits.collider = "none";
  scoreDigits.layer = 1000;
}

function draw() {
  image(background, 0, 0, width, height);

  if (menuMode) {
    drawMenu();
    handleMenuInput();
    return;
  }

  if (!startGame) {
    image(startScreenImg, width / 2 - 100, height / 2 - 150, 200, 150);
    if (kb.presses("space") || mouse.presses("left")) {
      startGame = true;
      bird.visible = true;
      bird.collider = "dynamic";
    }
    return;
  }

  // GAMEPLAY
  bird.x += 3;
  camera.x = bird.x;
  floor.x = camera.x;

  if (kb.presses("space") || mouse.presses("left")) {
    bird.vel.y = -5;
    bird.sleeping = false;
  }

  if (bird.vel.y < -1) {
    bird.img = flapUpImg;
    bird.rotation = -30;
  } else if (bird.vel.y > 1) {
    bird.img = flapDownImg;
    bird.rotation = 30;
  } else {
    bird.img = flapMidImg;
    bird.rotation = 0;
  }

  if (frameCount === 1 || frameCount % 90 === 0) {
    spawnPipePair();
  }

  // Remove off-screen pipes
  for (let pipe of pipeGroup) {
    if (pipe.x < camera.x - width / 2 - 100) {
      pipe.remove();
    }
  }

  // Score update
  for (let pipe of pipeGroup) {
    if (!pipe.passed && pipe.x + pipe.width < bird.x) {
      pipe.passed = true;
      score += 0.5;
    }
  }

  drawScore(width / 2, 20, score, 24, 36);

  if (bird.collides(pipeGroup) || bird.collides(floor)) {
    gameoverLabel = new Sprite();
    gameoverLabel.x = camera.x;
    gameoverLabel.y = height / 2;
    gameoverLabel.width = 192;
    gameoverLabel.height = 42;
    gameoverLabel.img = gameoverImg;
    gameoverLabel.layer = 100;
    noLoop();
  }
}

function drawMenu() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Flappy Bird", width / 2, 100);

  let options = ["Start Game", "Change Bird Color"];
  for (let i = 0; i < options.length; i++) {
    fill(i === currentMenuOption ? "yellow" : "white");
    text(options[i], width / 2, 200 + i * 50);
  }

  textSize(20);
  fill("white");
  text("Current Color: " + birdColors[selectedColorIndex], width / 2, 350);
}

function handleMenuInput() {
  if (kb.presses("up")) {
    currentMenuOption = (currentMenuOption - 1 + 2) % 2;
  }

  if (kb.presses("down")) {
    currentMenuOption = (currentMenuOption + 1) % 2;
  }

  if (kb.presses("enter")) {
    if (currentMenuOption === 0) {
      birdColor = birdColors[selectedColorIndex];
      loadBirdImages();
      menuMode = false;
    } else if (currentMenuOption === 1) {
      selectedColorIndex = (selectedColorIndex + 1) % birdColors.length;
    }
  }
}

function spawnPipePair() {
  let gap = 100;
  let midY = random(150, height - 150);
  let spawnX = camera.x + width;

  topPipe = new Sprite(spawnX, midY - gap / 2 - 200, 52, 320, "static");
  topPipe.img = pipe;
  topPipe.rotation = 180;
  topPipe.passed = false;

  bottomPipe = new Sprite(spawnX, midY + gap / 2 + 200, 52, 320, "static");
  bottomPipe.img = pipe;
  bottomPipe.passed = false;

  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);
}

function drawScore(x, y, score, digitWidth, digitHeight) {
  scoreDigits.removeAll();
  let scoreStr = str(floor(score));
  let totalWidth = scoreStr.length * digitWidth;
  let startX = x - totalWidth / 2;

  for (let i = 0; i < scoreStr.length; i++) {
    let digit = int(scoreStr[i]);
    let xPos = startX + i * digitWidth;
    let digitSprite = new scoreDigits.Sprite(xPos, y, digitWidth, digitHeight);
    digitSprite.img = numberImages[digit];
  }

  moveGroup(scoreDigits, camera.x, 24);
}

function moveGroup(group, targetX, spacing) {
  let totalWidth = (group.length - 1) * spacing;
  let startX = targetX - totalWidth / 2;
  for (let i = 0; i < group.length; i++) {
    group[i].x = startX + i * spacing;
  }
}
