let basketX = 160;
let ballX, ballY;
let score = 0;

function setup() {
  createCanvas(400, 400);

  ballX = random(20, 380);
  ballY = 0;
}

function draw() {
  background(25);

 
  fill(0, 200, 255);
  rect(basketX, 360, 80, 20);


  basketX = mouseX - 40;

 
  fill(255, 150, 0);
  ellipse(ballX, ballY, 30);

  ballY += 5;

  
  if (
    ballY > 340 &&
    ballX > basketX &&
    ballX < basketX + 80
  ) {
    score++;
    ballX = random(20, 380);
    ballY = 0;
  }

   if (ballY > height) {
    background(255, 0, 0);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Game Over", width / 2, 200);
    noLoop();
  }

  
  fill(255);
  textSize(22);
  text("Score: " + score, 20, 30);
}