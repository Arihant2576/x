var fRect, mRect;

function setup() {
  createCanvas(1200,800);
  fRect=createSprite(400, 100, 50, 80);
  mRect=createSprite(400, 800, 80, 30);
  fRect.shapeColor="green";
  mRect.shapeColor="green";
  fRect.debug=true;
  mRect.debug=true;
  mRect.velocityY=-5;
  fRect.velocityY=5;

}

function draw() {
  background(0,0,0);

  if(mRect.x-fRect.x<fRect.width/2+mRect.width/2&&
    fRect.x-mRect.x<fRect.width/2+mRect.width/2){
      mRect.velocityX=mRect.velocityX*(-1);
      fRect.velocityX=fRect.velocityX*(-1);
    }
  if(mRect.y-fRect.y<fRect.height/2+mRect.height/2&&
    fRect.y-mRect.y<fRect.height/2+mRect.height/2){
       mRect.velocityY=mRect.velocityY*(-1);
       fRect.velocityY=fRect.velocityY*(-1);
    }
  /*mRect.x=World.mouseX;
  mRect.y=World.mouseY;
  if(mRect.x-fRect.x<fRect.width/2+mRect.width/2&&
    fRect.x-mRect.x<fRect.width/2+mRect.width/2&&
    mRect.y-fRect.y<fRect.height/2+mRect.height/2&&
    fRect.y-mRect.y<fRect.height/2+mRect.height/2){
mRect.shapeColor="red";
fRect.shapeColor="red";

  }
  else{
    mRect.shapeColor="green";
    fRect.shapeColor="green";
  }*/
  
  drawSprites();
}