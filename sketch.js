// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;

// var engine,world

var snowImg
var boyImg

var backgroundImg;
var bg
var boy

function preload(){
  bg=loadImage("snow3.jpg")

  snowImg=loadImage("snow4.webp")
  boyImg=loadImage("boy1.png")
}


function setup() {

  // engine = Engine.create();
  //   world = engine.world;

  createCanvas(800,400);

  fill("red")
  boy=createSprite(600, 300, 50, 50);
  boy.addImage(boyImg)
  boy.scale=0.3

snow1= new Snow(400,200)


// Engine.run(engine);

}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("right")){
    boy.x=boy.x+1
  }
  if(keyDown("left")){
    boy.x=boy.x-1
  }

  console.log(boy)

  snow1.display()
  
  
spawnSnow()
  // Engine.update(engine);

}

function spawnSnow(){
  if(frameCount% 80===0){
  var snow=createSprite(400,10,50,50)
  snow.x=Math.round(random(10,700))

  snow.velocityY=2
  snow.addImage(snowImg)
  snow.scale=0.2
  }
}