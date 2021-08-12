var player,playerImg;
var flower,flowerImg;
var obstruction,flowerShopImg;
var bellNoise;

function preload(){

     
  playerImg = loadImage("GwenDramaRama.png");
  flowerImg = loadImage("flower.png");
  flowerShopImg = loadImage("th (1).jpeg");
  bellNoise = loadSound("bell noise.mp3")



}


function setup() {
  createCanvas(800,400);
  obstruction = createSprite(400, 200, 50, 50);
  obstruction.addImage(flowerShopImg);
  obstruction.scale=0.5
  
  player = createSprite(300,200,20,20)
  player.addImage(playerImg)
  player.scale=0.1
  flowerGroup = new Group();
}

function draw() {
  background("#F8F8F8");  
  
    if(player.isTouching(obstruction)){
      flowers();
      bellNoise.play();
    }
    


   if(keyDown(UP_ARROW)){
     
      player.y-=4


   }

   if(keyDown(DOWN_ARROW)){
     
    player.y+=4
    }
    
    if(keyDown(RIGHT_ARROW)){
     
      player.x+=4
      }
      
    if(keyDown(LEFT_ARROW)){
     
        player.x-=4
      }
      
  
  
  
  
  
  
  
  drawSprites();





}



function flowers(){
  if(frameCount%20===0){

    //giving random x and y positions for zombie to appear
    flower = createSprite(random(0,800),0,5,5)
    flower.addImage(flowerImg)
    flower.scale = 0.02
    flower.velocityY = +3
    flower.debug= false
    flower.setCollider("rectangle",0,0,40,40)
   
    flower.lifetime = 400
    flowerGroup.add(flower)
  }

}
