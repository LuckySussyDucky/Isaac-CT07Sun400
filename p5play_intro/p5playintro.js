let ball;
let box;
let xo;
function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  strokeWeight(0)
  world.gravity.y = 10;
  let floor = new Sprite(400, 390, 800, 20, "static"); //create a border so that when the ball spawns, it would not go out of the canvas
  let topfloor = new Sprite(400, 10, 800, 20, "static");
  let leftwall = new Sprite(10, 50, 20, 800, "static");
  let rightwall = new Sprite(790, 50, 20 , 800, "static");
  floor.color = "skyblue"
  topfloor.color = "skyblue"
  leftwall.color = "skyblue"
  rightwall.color = "skyblue"
  // Basic shape testing
  // write your codes here
  ball = new Sprite();
  ball.x = 400;
  ball.y = 200;
  ball.diameter = 40; //set the circle diameter
  ball.color = "skyblue";
  ball.vel.x = 3; //set velocity for x-axis
  ball.vel.y = 3; //set velocity for y-axis
  ball.bounciness = 1; //for more realistic bounce
  ball.collider = "dynamic"; 

  box = new Sprite();
  box.x = 400;
  box.y = 300;
  box.w = 30; //set the rect width
  box.h = 30; //set the rect height
  box.color = "skyblue";

  // fill("skyblue"); //fill the object with the colour
  // stroke("pink"); //create the border colour
  // strokeWeight(10); //border thickness
  // circle(30, 30, 50); //circle(x, y, diameter)
  // rect(50, 50, 100, 200); //rect(x, y, width, height)
  // circle(770, 30, 50);
  // circle(30, 370, 50);
  // circle(770, 370, 50);
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
    // fill(255, 0, 0)
    // ellipse(300, 100, 100, 100)
    // fill(255, 255, 0)
    // ellipse(300, 200, 100, 100)
    // fill(0, 255, 0)
    // ellipse(300, 300, 100, 100)
  // write your codes here
  background(240); //clear screen each frame
  
  //show coordinate of thr balls sprite
  fill(0);
  textSize(16);
  text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 25, 40);
  text("Mouse: (" + mouseX + ", " + mouseY + ")", 25, 60);

  //if x position goes off the left or right
  if (ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diamter / 2){
    ball.vel.x *= -1; //change +X to -X vice versa
  };
   
  if (ball.y < 0 + ball.diameter / 2 || ball.y > height - ball.diamter / 2){
    ball.vel.y *= -1; //change +Y to -Y vice versa
  };
    
  //if left click is pressed, new sprite of ball will be created
  if(mouse.presses("left")){
    xo = new Sprite(mouse.x, mouse.y, 30);
    xo.collider = "dynamic";
    xo.bounciness = 1;
  }

  //if right click is pressed, new sprite of ball will be created
  if(mouse.presses("right")){
      xo = new Sprite(mouse.x, mouse.y);
      xo.collider = "static";
      // xo.color = "red"
  }

  //make rect follow the mouse
  box.x = mouseX;
  box.y = mouseY;

}