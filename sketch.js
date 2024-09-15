
let theFont;
let cyclops;
let sound;


function preload(){
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
  cyclops = loadImage ("assets/cyclops.png");
  sound = loadSound ("assets/sound");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(theFont);
  textSize(72);
  textAlign(CENTER);
  imageMode(CENTER);
 

}

function draw() {
  background("#39FF14");


  if (mouseIsPressed) {
    show3D = true;
  
  } else {
    show3D = false; 

  }
  
  if (show3D){
    push();
    noStroke();
    texture(cyclops);
    rotateY(millis() / 1000); //ROTATE AROUND Y AXSIS 
    box(400); //box with image 
    pop();
  } else {
    if (keyIsDown(32)){
      let xOffset = random(-5, 5);
      let yOffset = random(-5, 5);
      text("SUBTRONICS", xOffset, yOffset);
    }
    text("SUBTRONICS", 0, 0); 
  }
}

