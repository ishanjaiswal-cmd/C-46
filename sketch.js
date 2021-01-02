var PLAY = 1;
var END = 0;
var gameState = PLAY;

var backImg,back;
var officerImg,officer;
var invisibleGround
var Catcher;
var back2Img,back2;

function preload(){
    //officer_running=loadAnimation("AR1.png,AR2.png,AR3.png,AR4.png,AR5.png,AR6.png");
    catcherImg=loadImage("Catcher.png");
    caughtImg=loadImage("caught.png");
    backImg=loadImage("Desert.jpg");
    bullet=loadImage("gun shot.png");
    back2Img=loadImage("Back2.jpg");
    }
    function setup(){
    createCanvas(1200,750);
    officer=createSprite(200,600,0,0)
    officer.addImage("officer",caughtImg);
    officer.scale=0.5;
    back=createSprite(400,400,40,10)
    back.addImage("back",backImg)
    back.velocityX = -4;
  // invisible Ground
    invisibleGround = createSprite(400,670,1600,10);
    invisibleGround.velocityX=-4;
     invisibleGround.visible = false;
 

     ObstacleGroup = new Group();
    }
    function draw(){
    //background(255);
   //Gravity
   officer.velocityY = officer.velocityY + 0.8
   officer.depth=back.depth;
   officer.depth++
   
    officer.collide(invisibleGround);
    //gamestates
    if(gameState=PLAY){
        if (back.x < 550){
            back.x = back.width/2;
          }
          if (invisibleGround.x < 550){
            invisibleGround.x = invisibleGround.width/2;
          }
    }
    //Collide
   
    else if(gameState=END){
      if(officer.isTouching(invisibleGround)){
        console.log("Ishan")
      }

       /*back2=createSprite(400,400,40,10)
        back2.addImage("back2",back2Img);*/
      
    }
    spawnObstacle();
    drawSprites();
    }
function spawnObstacle(){
if(frameCount%80===60){ 

  Catcher=createSprite(400,officer.y,0,0);
  Catcher.addImage("Catcher",catcherImg);
  Catcher.scale=0.5; 
  Catcher.x=Math.round(random(600,1200))
  Catcher.velocityX=-4;

  Catcher.depth=back.depth;
   Catcher.depth=Catcher.depth+1

  ObstacleGroup.add(Catcher);
}
}
