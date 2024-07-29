
// Create global variables for ball position, ball properties
// set up everything that doesn't change
let ballX; // Ball's X position
let ballY; // Ball's Y position
let ballSize = 50; // Diameter of the ball
let ballSpeedX=5; // Horizontal speed
let ballSpeedY=8; // Vertical speed

function setup() {
  createCanvas(600, 600);
  background(240);
  // create a ball on a screen 
  ballX = width / 2;
  ballY = height / 2;
  
}

function draw() {
  background(247,153,189);
  // Draw the bouncing ball
  fill(143, 112, 207); // Blue color
  ellipse(ballX, ballY, ballSize);
  
  // Update ball position
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  // move a ball continuously until it reaches the boundary of a screen
  if (ballX + ballSize / 2 > width || ballX - ballSize / 2 < 0) {
    // when the ball reaches the boundary, reverse the movement
    ballSpeedX *= -1;
  }
  if (ballY + ballSize / 2 > height || ballY - ballSize / 2 < 0) {
    // Reverse vertical movement
    ballSpeedY *= -1;
  }
}