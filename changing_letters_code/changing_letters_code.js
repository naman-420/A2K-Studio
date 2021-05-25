var font, fontSize, testText;

function preload() {
  font = loadFont('data/Cypher.otf');
  
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  textFont(font);
  fontSize=(height/1.75);
  testText="CYPHER";
  
}

function draw() {
 background (0);
 textSize(fontSize);
 text(testText, width/2, height/2);
  
}

function keyTyped(){
 testText=key; 
}
