var ghost,ghostimg;
var tower,towerimg;
var door,doorimg;
var climber,climberimg;
var gameState = "play"
var blockGroup,climberGroup

function preload(){
  ghostimg = loadImage("ghost-standing.png")
  towerimg = loadImage("tower.png")
  doorimg = loadImage("door.png")
  climberimg = loadImage("climber.png")
}
function setup(){
  createCanvas(500,600)
  tower = createSprite(250,300)
  tower.addImage(towerimg)
  tower.scale = 0.9
  tower.velocityY = 2
  blockGroup = new Group()
  climberGroup = new Group()
  
  
  ghost= createSprite(300,400)
  ghost.addImage(ghostimg)
  ghost.scale = 0.3
}

function draw(){
  background(0)
  if(gameState==="play"){
  if(tower.y>400){
    tower.y = 300
  }
  
  if(keyDown("space")){
    ghost.velocityY = -3
  }
  if(keyDown("left")){
    ghost.x = ghost.x-2
  }
  
  if(keyDown("right")){
    ghost.x = ghost.x+2
  }
  obstacles()
  ghost.velocityY = ghost.velocityY+0.5
  drawSprites();
    if(climberGroup.isTouching(ghost)){
      ghost.velocityY = 0 
    }
    if(ghost.y>600||blockGroup.isTouching(ghost)){
      gameState = "end"
    }
  
}
  if (gameState==="end"){
    textSize(25)
    stroke("yellow")
    text("GAME OVER",250,300)
  }

}

function obstacles(){
  if(frameCount%170===0){
   door = createSprite(150,-50)
   climber = createSprite(150,0) 
    var block = createSprite(150,0)
    block.velocityY = 2
    door.velocityY = 2
    door.addImage(doorimg)
    climber.velocityY = 2
    climber.addImage(climberimg)
    door.x = Math.round(random(100,400))
    climber.x = door.x
    block.x=door.x
    door.lifetime = 600
    climber.lifetime = 600
    block.visible = false
    ghost.depth = door.depth+1
    blockGroup.add(block) 
    climberGroup.add(climber)
  }        
}
