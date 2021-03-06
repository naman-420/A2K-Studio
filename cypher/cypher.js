var font, fontSize, testText, x, y, eyefill;
var start;
var spin = 0;
let button;
let bell;
let myText = `abcdefghijklm
nopqrstuvwxyz
0123456789
!#;:'".,?`;




function preload() { //loading the files from data folder
  font = loadFont('data/Cypher.otf');
  bell = loadSound('data/track.mp3');

}

  function setup () {
  
  bell.setVolume(0.1);// this is the max vol
  bell.loop(); // continous loop so that the bg music keeps playing
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  fill(214, 79, 0);
  noStroke();
  textFont(font);
  fontSize=(height/1.75, width/4);
  testText="CYPHER"; //change test text here, which aappears on the home page
  x=1;
  y=1;
  eyefill=0;
  start = "off";
  button = createButton('CLICK HERE TO BRING BACK CYPHER');
  button.position(0,0);
  button.mousePressed(resetSketch);
  
  button = createButton('SAMPLER');
  button.position(0,30);
  button.mousePressed(sampler);
  angleMode(DEGREES);
  spin = (0);

}



  
function draw(){
 
 textSize(fontSize);

 fill(128 + sin(frameCount*1) * 100); // flashing colours, the colour values can be changed
 
 text(testText, width/2, height/2);
 
  background(0, 17); //bg colour , other number is the alpha value which adds the additional waves behind the text

  if(start== "on"){ //bringing in eyes with mouse click
   text(testText);
   x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); //made a huge mistsaake by not using wiwdth values for eye postions so it does not scale as per the screen size
  noStroke();
 ellipse(450+x,380+y,150,150);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(450+x,380+y,125,125);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(433+x,378+y,90,90);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(425+x,373+y,50,50);
  ////////////////
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(650+x,600+y,140,140);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(650+x,600+y,115,115);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(633+x,598+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(625+x,593+y,40,40);
  
  ///////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(460+x,550+y,110,110);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(460+x,550+y,90,90);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(443+x,548+y,65,65);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(435+x,543+y,30,30);
  
  ///////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(250+x,300+y,200,200);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(250+x,300+y,155,155);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(233+x,298+y,105,105);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(225+x,293+y,50,50);
  
  //////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(480+x,150+y,200,200);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(480+x,150+y,155,155);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(463+x,148+y,105,105);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(455+x,143+y,50,50);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(250+x,550+y,220,220);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(250+x,550+y,175,175);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(233+x,548+y,125,125);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(225+x,543+y,70,70);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(270+x,90+y,130,130);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(270+x,90+y,95,95);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(253+x,88+y,65,65);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(245+x,83+y,30,30);
  
  //////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(110+x,150+y,160,160);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(110+x,150+y,125,125);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(93+x,148+y,95,95);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(85+x,143+y,50,50);
  
  //////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(710+x,100+y,140,140);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(710+x,100+y,105,105);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(693+x,98+y,75,75);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(685+x,93+y,30,30);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(90+x,425+y,140,140);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(90+x,425+y,105,105);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(73+x,423+y,75,75);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(65+x,418+y,30,30);
  
  //////
  
      x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(860+x,610+y,150,150);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(860+x,610+y,120, 120);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(843+x,608+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(835+x,603+y,40,40);
  
  /////
  
        x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1050+x,376+y,200,200);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1050+x,376+y,150, 150);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1033+x,374+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1025+x,369+y,60,60);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1000+x,110+y,250,250);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1000+x,110+y,200, 200);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(983+x,108+y,130,130);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(975+x,103+y,70,70);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1240+x,230+y,170,170);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1240+x,230+y,130, 130);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1223+x,230+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1214+x,226+y,60,60);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1240+x,230+y,170,170);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1240+x,230+y,130, 130);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1223+x,230+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1214+x,226+y,50,50);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1250+x,420+y,140,140);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1250+x,420+y,100, 100);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1233+x,420+y,70,70);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1224+x,416+y,40,40);
  
  //////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1200+x,590+y,150,150);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1200+x,590+y,120, 120);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1183+x,590+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1174+x,586+y,40,40);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1030+x,580+y,120,120);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1030+x,580+y,90, 90);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1013+x,580+y,60,60);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1004+x,576+y,30,30);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1220+x,50+y,110,110);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1220+x,50+y,80, 80);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1203+x,50+y,60,60);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1194+x,46+y,30,30);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1390+x,570+y,190,190);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1390+x,570+y,140, 140);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1373+x,570+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1364+x,566+y,40,40);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1400+x,330+y,150,150);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1400+x,330+y,110, 110);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1383+x,330+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1374+x,326+y,40,40);
  
  /////
  
      x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1400+x,120+y,150,150);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(1400+x,120+y,110, 110);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1383+x,120+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(1374+x,116+y,40,40);
  
  /////
  
      x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(70+x,590+y,100,100);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(70+x,590+y,70,70);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(53+x,588+y,50,50);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(45+x,583+y,30,30);
  
  /////
  
        x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(70+x,290+y,100,100);
  
  
  fill(255,0,0 + sin(frameCount*50) * 168); 
  noStroke();
  ellipse(70+x,290+y,70,70);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(53+x,288+y,50,50);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(255,0,0 + sin(frameCount*50) * 168);
  ellipse(45+x,283+y,25,25);
 }
 
 else {text("CYPHER");
 }
   

}

function sampler(){
  
  background(0);
  
  fill(214, 79, 0);
  noStroke();
  textFont(font);
  fontSize=(height/2,width/12);
  
  testText=(myText);
  
  }
  
  
function resetSketch(){ // this was taken from a tutorial by Coding Train on youtube
  background(0);
  textAlign(CENTER, CENTER);
  fill(214, 79, 0);
  noStroke();
  textFont(font);
  fontSize=(height/1.75, width/4);
  testText="CYPHER";
}


      

function keyTyped(){
 testText=key; 
}

function mousePressed(){ //to bring in the eyes with mouse click function
  if (start == "off") {
    (start = "on");
  } else {
    (start="off");
  }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
}
