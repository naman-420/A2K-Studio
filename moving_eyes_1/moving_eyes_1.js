let xLeft = 160;
let xRight = 240;
let y = 180;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(165, 61, 19);

  // Eye balls
  noStroke();
  fill(255);
  ellipse(160, 180, 60);
  ellipse(240, 180, 60);

  // Pupils
  fill(0);
  ellipse(xLeft, y, 25);
  ellipse(xRight, y, 25);

  y = map(mouseY, 0, height, 170, 190, true);
  xLeft = map(mouseX, 0, width, 150, 170, true);
  xRight = map(mouseX, 0, width, 230, 250, true);
}
