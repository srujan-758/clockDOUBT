
var hr;
var min;
var sec;
var scAngle;

function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);
  hr=hour();
  min=minute();
  sec=second();
 
}

function draw() {

  background("black");
  
  hr=hour();
  min=minute();
  sec=second();

  var pos=this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y); 
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  scAngle=map(sec,0,60,0,360);
  pop();  
  drawSprites();
}