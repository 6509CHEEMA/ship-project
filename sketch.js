var shipimage,seaimage;
var ship,sea

function preload(){
seaimage=loadImage("sea.png");
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.scale=0.3;
  sea.addImage(seaimage);
  sea.velocityX=-2;
  ship=createSprite(200,200);
  ship.scale=0.4;
  ship.addAnimation("movingship",shipimage);
}

function draw() {
  background("blue");
  sea.velocityX=-2;
  if (sea.x<0){ 
  sea.x=sea.width/2;
  }
 drawSprites();
}