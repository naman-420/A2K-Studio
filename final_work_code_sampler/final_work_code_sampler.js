var font, fontSize, testText, x, y, eyefill;

function preload() {
  font = loadFont('data/Cypher.otf');

}

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  fill(214, 79, 0);
  noStroke();
  textFont(font);
  fontSize=(height/1.75);
  testText="CYPHER";
  x=1;
  y=1;
  eyefill=0;
}

function draw(){
 background(0);
 textSize(fontSize);
 fill(214, 79, 0);
 text(testText, width/2, height/2);
 
 ////////////////////////////////////////
 
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
 ellipse(450+x,380+y,150,150);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(450+x,380+y,125,125);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(433+x,378+y,90,90);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(425+x,373+y,50,50);
  ////////////////
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(650+x,600+y,140,140);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(650+x,600+y,115,115);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(633+x,598+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(625+x,593+y,40,40);
  
  ///////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(460+x,550+y,110,110);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(460+x,550+y,90,90);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(443+x,548+y,65,65);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(435+x,543+y,30,30);
  
  ///////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(250+x,300+y,200,200);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(250+x,300+y,155,155);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(233+x,298+y,105,105);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(225+x,293+y,50,50);
  
  //////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(480+x,150+y,200,200);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(480+x,150+y,155,155);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(463+x,148+y,105,105);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(455+x,143+y,50,50);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(250+x,550+y,220,220);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(250+x,550+y,175,175);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(233+x,548+y,125,125);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(225+x,543+y,70,70);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(270+x,90+y,130,130);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(270+x,90+y,95,95);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(253+x,88+y,65,65);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(245+x,83+y,30,30);
  
  //////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(110+x,150+y,160,160);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(110+x,150+y,125,125);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(93+x,148+y,95,95);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(85+x,143+y,50,50);
  
  //////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(710+x,100+y,140,140);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(710+x,100+y,105,105);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(693+x,98+y,75,75);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(685+x,93+y,30,30);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(90+x,425+y,140,140);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(90+x,425+y,105,105);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(73+x,423+y,75,75);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(65+x,418+y,30,30);
  
  //////
  
      x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(860+x,610+y,150,150);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(860+x,610+y,120, 120);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(843+x,608+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(835+x,603+y,40,40);
  
  /////
  
        x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(1050+x,376+y,200,200);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1050+x,376+y,150, 150);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1033+x,374+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1025+x,369+y,60,60);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1000+x,110+y,250,250);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1000+x,110+y,200, 200);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(983+x,108+y,130,130);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(975+x,103+y,70,70);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1240+x,230+y,170,170);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1240+x,230+y,130, 130);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1223+x,230+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1214+x,226+y,60,60);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1240+x,230+y,170,170);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1240+x,230+y,130, 130);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1223+x,230+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1214+x,226+y,50,50);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1250+x,420+y,140,140);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1250+x,420+y,100, 100);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1233+x,420+y,70,70);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1224+x,416+y,40,40);
  
  //////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1200+x,590+y,150,150);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1200+x,590+y,120, 120);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1183+x,590+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1174+x,586+y,40,40);
  
  /////
  
  x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1030+x,580+y,120,120);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1030+x,580+y,90, 90);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1013+x,580+y,60,60);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1004+x,576+y,30,30);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1220+x,50+y,110,110);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1220+x,50+y,80, 80);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1203+x,50+y,60,60);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1194+x,46+y,30,30);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1390+x,570+y,190,190);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1390+x,570+y,140, 140);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1373+x,570+y,100,100);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1364+x,566+y,40,40);
  
  /////
  
    x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1400+x,330+y,150,150);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1400+x,330+y,110, 110);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1383+x,330+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1374+x,326+y,40,40);
  
  /////
  
      x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

  fill(255); 
  noStroke();
  ellipse(1400+x,120+y,150,150);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(1400+x,120+y,110, 110);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(1383+x,120+y,80,80);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(1374+x,116+y,40,40);
  
  /////
  
      x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(70+x,590+y,100,100);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(70+x,590+y,70,70);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(53+x,588+y,50,50);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(45+x,583+y,30,30);
  
  /////
  
        x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 

fill(255); 
  noStroke();
  ellipse(70+x,290+y,100,100);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(70+x,290+y,70,70);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(53+x,288+y,50,50);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(45+x,283+y,25,25);
  
  //////////////////////////////////////////
 
 
 
 
 
 
 if (key == 'p'){
   
 x=(mouseX-200)/90;
  y=(mouseY-200)/40;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(812+x,321+y,35,35);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(812+x,321+y,26,26);
  
  x=(mouseX-200)/55;
  y=(mouseY-200)/25;
  fill(0); 
  noStroke();
  ellipse(810+x,318+y,15,15);
  
  
  x=(mouseX-175)/48;
  y=(mouseY-200)/22;
  //fill(0); 
  noStroke();
  //ellipse(804+x,317+y,15,15);
  fill(201,201, 201);
  ellipse(808+x,315+y,9,9);
  
  // eye highlights
 //fill(255, 85); /
  //noStroke();
  //ellipse(804+x,317+y,15,15);
  
  
  //fill(255); //change colours of eyeballs when mouse is clicked
  //noStroke();
  //ellipse(806+x,317+y,9,9);
  
  pop();
 }
 
  if (key == 'O'){
   
 x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(720+x,380+y,100,100);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(720+x,380+y,75,75);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(703+x,378+y,55,55);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(695+x,373+y,20,20);
  
  // eye highlights
 //fill(255, 85); 
  //noStroke();
  //ellipse(804+x,317+y,15,15);
  
  
  //fill(255); 
  //noStroke();
  //ellipse(720+x,317+y,9,9);
  
  pop();
 }
 
   if (key == 'o'){
   
 x=(mouseX-200)/40;
  y=(mouseY-200)/20;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(720+x,380+y,100,100);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(720+x,380+y,75,75);
  
  x=(mouseX-175)/20;
  y=(mouseY-200)/15;
  fill(0); 
  noStroke();
  ellipse(703+x,378+y,55,55);
  
  x=(mouseX-175)/15;
  y=(mouseY-200)/10;
  fill(201,201, 201);
  ellipse(695+x,373+y,20,20);
  
  // eye highlights
 //fill(255, 85); 
  //noStroke();
  //ellipse(804+x,317+y,15,15);
  
  
  //fill(255); 
  //noStroke();
  //ellipse(720+x,317+y,9,9);
  
  pop();
 }
 
  if (key == 'P'){
   
 x=(mouseX-200)/90;
  y=(mouseY-200)/40;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(812+x,321+y,35,35);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(812+x,321+y,26,26);
  
  x=(mouseX-200)/55;
  y=(mouseY-200)/25;
  fill(0); 
  noStroke();
  ellipse(810+x,318+y,15,15);
  
  
  x=(mouseX-175)/48;
  y=(mouseY-200)/22;
  //fill(0); 
  noStroke();
  //ellipse(804+x,317+y,15,15);
  fill(201,201, 201);
  ellipse(808+x,315+y,9,9);
  
  // eye highlights
 //fill(255, 85); /
  //noStroke();
  //ellipse(804+x,317+y,15,15);
  
  
  //fill(255); //change colours of eyeballs when mouse is clicked
  //noStroke();
  //ellipse(806+x,317+y,9,9);
  
  pop();
 }
 

 
 
 if (key == 'r'){
   
 x=(mouseX-200)/40;
  y=(mouseY-200)/28;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(780+x,300+y,50,40);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(780+x,300+y,30,26);
  
  
  fill(0); 
  noStroke();
  ellipse(780+x,300+y,15,15);
  
  
  x=(mouseX-175)/35;
  y=(mouseY-200)/25;
  //fill(0); 
  noStroke();
  //ellipse(804+x,317+y,15,15);
  fill(201,201, 201);
  ellipse(777+x,300+y,9,9);
  
  // eye highlights
 //fill(255, 85); /
  //noStroke();
  //ellipse(804+x,317+y,15,15);
  
  
  //fill(255); //change colours of eyeballs when mouse is clicked
  //noStroke();
  //ellipse(806+x,317+y,9,9);
  
  pop();
 }
 
 
 if (key == 'R'){
   
  x=(mouseX-200)/40;
  y=(mouseY-200)/28;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(780+x,300+y,50,40);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(780+x,300+y,30,26);
  
  
  fill(0); 
  noStroke();
  ellipse(780+x,300+y,15,15);
  
  
  x=(mouseX-175)/35;
  y=(mouseY-200)/25;
  //fill(0); 
  noStroke();
  //ellipse(804+x,317+y,15,15);
  fill(201,201, 201);
  ellipse(777+x,300+y,9,9);
  
  // eye highlights
 //fill(255, 85); /
  //noStroke();
  //ellipse(804+x,317+y,15,15);
  
  
  //fill(255); //change colours of eyeballs when mouse is clicked
  //noStroke();
  //ellipse(806+x,317+y,9,9);
  
  pop();
 }
 
 if (key == '8'){
   
 x=(mouseX-200)/40;
 y=(mouseY-200)/50;
 
  push(); // this push-pop makes the elements only affect the eye irises
            // and not the font itself
fill(255); 
  noStroke();
  ellipse(754+x,330+y,50,40);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(754+x,330+y,30,26);
  
  
  fill(0); 
  noStroke();
  ellipse(754+x,330+y,15,15);
  
  
  x=(mouseX-175)/35;
  y=(mouseY-200)/30;
  //fill(0); 
  noStroke();
  //ellipse(804+x,317+y,15,15);
  fill(201,201, 201);
  ellipse(751+x,327+y,9,9);
  
  
  fill(255); 
  noStroke();
  ellipse(754+x,384+y,50,40);
  
  
  fill(172, 173, 172); 
  noStroke();
  ellipse(754+x,384+y,30,26);
  
  
  fill(0); 
  noStroke();
  ellipse(754+x,384+y,15,15);
  
    x=(mouseX-175)/30;
  y=(mouseY-200)/22;
  //fill(0); 
  noStroke();
  //ellipse(804+x,317+y,15,15);
  fill(201,201, 201);
  ellipse(751+x,383+y,9,9);
  
  pop();
 }


}

      

function keyTyped(){
 testText=key; 
}

function mousePressed(){
  if (testText == key) {
    testText = "cypher";
  } else {
    testText=key;
  }

}
