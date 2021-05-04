var font1;
var myText = 'Lorem-Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book).'
//add back (\) slash before any symbol that makes the text black like an apostraphe
// can use \n for a line break in a paragraph text
var size = 32
function preload(){
  font1 = loadFont('data/Pilowlava.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(font1);
  textSize(32);
  words = myText.split(' '); //text.split means take my var which is myText and apply which is dot and apply split which is the function
  //textLeading(32*1.5); //add leading between lines
  fill(255);

}


function draw() {
  background(0);
//text(myText, width/20, height/20, 1000, 300);
 for (var i=0; i<words.length; i++){
   if (frameCount>100*i){  //i is just a counter variable, we can use any letter or word instead of i
 text(words[i], 10, i*32);
}
 }

}
