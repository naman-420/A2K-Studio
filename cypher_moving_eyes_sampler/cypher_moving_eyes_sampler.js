
function preload(){
  font = loadFont('data/Cypher.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  //fill(255);
  noStroke();
  textFont(font);
  fontSize=(height/2);
    r = random(255);
  g = random(255);
  b = random(255);

}


function draw() {
    background(0);
    textSize(365);
    fill(255);
    text('cypher',width/2, height/2);
    
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
  
  fill(r,g,b) //change colours of eyeballs when mouse is clicked
  noStroke();
  ellipse(729+x,321+y,30,30);
  ellipse(1322+x,307+y,30,30);
    
}
function mousePressed(){
  r = random(255);
    g = random(255);
    b = random(255);
 }
    
