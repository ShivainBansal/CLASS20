
var fixRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixRect = createSprite (400,100,70,100);
  fixRect.shapeColor="yellow";
  fixRect.debug=true;
  movingRect = createSprite (400,400,40,80);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  movingRect.velocityY=-7;
  fixRect.velocityY=7;
}

function draw() {
  background("black");

if( movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2 && fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2)
  {
movingRect.velocityX=movingRect.velocityX*(-1);
fixRect.velocityX=fixRect.velocityX*(-1);
}


if(movingRect.y-fixRect.y<=movingRect.height/2+fixRect.height/2 && fixRect.y-movingRect.y<=movingRect.height/2+fixRect.height/2) {
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixRect.velocityY=fixRect.velocityY*(-1);
    }
  

  drawSprites();
}