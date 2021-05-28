
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gamestate="play"
var survivaltime=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  fruitImage=loadImage("banana.png")
  
 
}



function setup() {
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  console.log(ground.x)
  fruitGroup=new Group()
  obstacleGroup=new Group()

}


function draw() {

background("255")
drawSprites()
  if (gamestate=="play"){
  

if(ground.x<0){
  ground.x=ground.width/2
}
  
  if (keyDown("SPACE")){
  monkey.velocityY=-12

  }
 if(monkey.isTouching(fruitGroup)){
   fruitGroup.destroyEach()
   
 }
 if(monkey.isTouching(obstacleGroup)){
   monkey.destroy()
   gamestate="end"
 
 }
survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivaltime,100,50)
fruits()
obstacles()
}
else{
   background("black"); 
  textSize(30)
   text("gameover",200,200)
  


}
monkey.velocityY=monkey.velocityY+0.8
monkey.collide(ground)


}
function fruits(){
  if(frameCount%50==0){
 
  fruit=createSprite(500,200,20,20)
  fruit.addImage(fruitImage)
  fruit.scale=0.1
  fruit.velocityX=-5
  fruitGroup.add(fruit)
}
}
function obstacles (){
  if(frameCount%100==0){
  obstacle=createSprite(500,315,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-6
  obstacleGroup.add(obstacle)
  obstacle.scale=0.2
    
  }    
}







