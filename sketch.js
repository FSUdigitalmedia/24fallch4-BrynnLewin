
let theFont;
let cyclops;

function preload(){
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
  cyclops = loadImage ("assets/cyclops.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(theFont);
  textSize(72);
  textAlign(CENTER);
  imageMode(CENTER);

}

function draw() {
  background("#39FF14");
  
  fill(color("white"));
  text("SUBTRONICS", width/2, height/2); 
}

