var tom,tomImg,tomwWalkingImg,jerry,jerryImg,jerryImg2,jerryImg3,background,backgroundImg;
function preload() {
   backgroundImg=loadAnimation("garden.png");
   tomImg=loadAnimation("tomOne.png");
   tomwWalkingImg=loadAnimation("tomTwo.png","tomThree.png");
   jerryImg=loadAnimation("jerryOne.png");
   jerryImg2=loadAnimation("jerryTwo.png","jerryThree.png",);
   jerryImg3=loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
   background=createSprites(500,400,50,50);
   background.addAnimation("bgi",backgroundImg);
   tom=createSprites(900,600,50,50);
   jerry=createSprites(300,600,50,50);
   jerry.addAnimation("jerry";jerryImg); 
}

function draw() {
     
    tom.velocityX=0;
   keyPressed();
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
       tom.velocityX=0;
       tom.addAnimation("tom",tomwWalkingImg);
       tom.changeAnimation("tom");
       jerry.addAnimation("jerry2";jerryImg3);
       jerry.changeAnimation("jerry2");
   }
    drawSprites();
   Text(jerryX+","+jerryY,10,45);
}


function keyPressed(){
 if(keyDown===LEFT_ARROW){
     tom.velocityX=-5;
     tom.addAnimation("tomi",tomImg);
     tom.changeAnimation("tomi");
     jerry.addAnimation("jerry1";jerryImg2);
     jerry.changeAnimation("jerry1");
 }
  

}
