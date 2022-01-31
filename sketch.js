var player;
var ball;



function setup(){
createCanvas(windowWidth, windowHeight)

player=createSprite(windowWidth/2,windowHeight-100)
ball=createSprite(windowWidth/2,windowHeight-200)
player.shapeColor=("black")
ball.shapeColor=("red")
}

function draw(){
background("grey")
player.x=mouseX;
//console.log (player.x)

if(player.x<=50){
player.x=50
}
if(player.x>=1300){
  player.x=1300
  }
drawSprites()
}

function mousePressedOver(){
ball.velocityX=5
ball.velocityY=-2
}