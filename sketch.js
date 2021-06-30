var bg,bgImage,sleepImage,moveImage,gym1Image,gym2Image,eatImage,drinkImage,brushImage,bathImage;
var astronaut;
function preload(){
  bgImage=loadImage("iss.png");
  sleepImage=loadAnimation("sleep.png");
  moveImage=loadAnimation("move.png","move1.png");
  gym1Image=loadAnimation("gym1.png","gym2.png");
  gym2Image=loadAnimation("gym11.png","gym12.png");
  eatImage=loadAnimation("eat1.png","eat2.png");
  drinkImage=loadAnimation("drink1.png","drink2.png");
  brushImage=loadImage("brush.png");
  bathImage=loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);

  bg=createSprite(400, 200, 50, 50);
  bg.addImage(bgImage);

  astronaut = createSprite(400,200);
  astronaut.addAnimation("sleeping",sleepImage);
  astronaut.scale=0.1;
}

function draw() {
  text("Intstructions:"+"Up Arrow = Brushing"+"Down Arrow = Gymming"+"Left Arrow = Eating"+"Right Arrow = Eating"+"m key = Moving",50,30);
  background(255,255,255);  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImage);
    astronaut.changeAniamation("brushing");
    astronaut.y = 350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bathImage);
    astronaut.changeAniamation("bathing");
    astronaut.y = 350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eatImage);
    astronaut.changeAniamation("eating");
    astronaut.y = 350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym1Image);
    astronaut.changeAniamation("gymming");
    astronaut.y = 350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",moveImage);
    astronaut.changeAniamation("moving");
    astronaut.y = 350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  drawSprites();
}