var boy,boyImage;
var wood,woodImage;
var forest,forestImage;
var invisibleGround;
var woodGroup;


function preload(){
boyImage = loadImage("boy.png");
woodImage = loadImage("wood.png");
forestImage = loadImage("forest.jpg");

}

function setup() {
    createCanvas(displayWidth-5,displayHeight-120);
boy=createSprite(386,396);
boy.addImage(boyImage);
 boy.scale=0.5;

invisibleGround=createSprite(375,519,400,10) ;
invisibleGround.visible=false;
woodGroup = createGroup();

}

function draw() {
 background(forestImage);
 fill("black");
if (keyDown("up_arrow")){

boy.velocityY=-10  ;  
}
boy.velocityY+=0.8;
boy.collide(invisibleGround);
if(woodGroup.isTouching(boy)){
woodGroup.setVelocityXEach(0);




}
spawnwood();
 drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY);
}
function spawnwood(){
if(frameCount%150 ===0){
   wood = createSprite(displayWidth+100,450);
   wood.addImage(woodImage);
   wood.velocityX =-6;
   woodGroup.add(wood);




}

}



