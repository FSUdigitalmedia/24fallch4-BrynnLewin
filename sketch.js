//all the sound things in the green are things i tried to make the sound work but it didnt work 
//space bar makes text vibrate 
//mouse click shows 3D Dj logo (subtronics is a DJ)

let theFont;
let cyclops;
//let mysound;


function preload(){
  theFont = loadFont("assets/ProtestGuerrilla-Regular.ttf");
  cyclops = loadImage ("assets/cyclops.png");
  //soundFormats('m4a', 'mp4', 'mp3');
  //mySound = loadSound ("assets/sound2.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(theFont);
  textSize(72);
  textAlign(CENTER);
  imageMode(CENTER);
  //mysound.play();
  //mysound.loop();
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
    rotate(millis() / 1000); //ROTATE AROUND Y AXSIS 
    box(400); //box with image 
    orbitControl(mouseX, mouseY);
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

