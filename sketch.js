var ghost,ghostImg;
var tower,towerImg;
var tower1,towerimg;
var bat ,batimg;
var bomb,bombimg;
var coin,coinimg;
var batGroup,bombGroup,coinGroup;
var score;
var PLAY=1;
var END=0;
var gameState="play"
function preload(){
  ghostImg=loadImage("ghost.gif");
  towerImg=loadImage("tower.png");
  batimg=loadImage("bati.gif");
  bombimg=loadImage("bomb.png");
  coinimg=loadImage("coin1.png");
}

function setup() {
  createCanvas(600,600);
  bombGroup=createGroup();
  coinGroup=createGroup();
  batGroup=createGroup();
  tower=createSprite(300,000,50,50);
  tower.addImage("c",towerImg);
  tower.scale=1;
  tower.velocityY=0;
   ghost=createSprite(300,300,50,50);
  ghost.addImage("b",ghostImg);
  ghost.scale=0.5;
  score=0;
  
  
  
  
 
}

function draw() {
  background("brown")
 if(gameState==="play"){
    bat();
  bomb();
  coin();
   if(keyDown("left_arrow")){
    ghost.x=ghost.x-5
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+5;
  }
  if(keyDown("space")){
    ghost.velocityY=-2;
  }
   ghost.velocityY=ghost.velocityY+1
    
  

if(tower.y>600){
  tower.y=300;
  
}
if(coinGroup.isTouching(ghost)){
  score=score+1;
  coinGroup.destroyEach();
}
   if(batGroup.isTouching(ghost)||bombGroup.isTouching(ghost)){
   batGroup.destroyEach();
   bombGroup.destroyEach();
   ghost.destroy();
   //end();
   gameState="end"; 
  }
   drawSprites();
   }
   
  fill("yellow")
  textSize(15)
  text("score:  "+score,450,50)
  if(gameState==="end"){
    stroke("yellow");
    fill("red")
    textSize(30)
    text("GameOver",230,300)
    score.visible=false;
  }
 }



  

 
  
  

 
 

function bat(){
  if(frameCount%300===0){
  var bat=createSprite(0,300,50,50);
  bat.addImage("d",batimg);
  bat.x=Math.round(random(10,550))
  bat.velocityY=2;
  bat.scale=0.5
  batGroup.add(bat);
}
}
function bomb(){
  if(frameCount%200===0){
    var bomb=createSprite(0,300,40,40);
    bomb.addImage("a",bombimg);
    bomb.x=Math.round(random(20,500))
    bomb.velocityY=3;
    bomb.scale=0.3;
    bombGroup.add(bomb);
    
  }
}
function coin(){
  if(frameCount%200===0){
    var coin=createSprite(0,300,40,40);
    coin.addImage("b",coinimg);
    coin.x=Math.round(random(30,450));
    coin.velocityY=3;
    coin.scale=0.25;
    coinGroup.add(coin);
  }
}


 
