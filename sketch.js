

var  hr , _mn , sc ;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);// 
  
  angleMode(DEGREES);

  sc = second();
  scAngle = map(sc, 0,60, 0,360);

  hr = hour();
  mn = minute();

  push();
  rotate(scAngle);
  line(0,0,100,0);
  stroke(255,0,0);
  strokeWeight(7);
  pop();
}

function draw() {
  background(73,73,70);  
  drawSprites();
}