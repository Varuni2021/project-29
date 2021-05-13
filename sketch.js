const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
//var SlingShot;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  slingshot = new Slingshot(200,200,10,10);

  box1 = new Box(600,280,30,40);
  box2 = new Box(400,240,30,40);
  box3 = new Box(370,240,30,40);
  box4 = new Box(420,200,30,40);
  box5 = new Box(390,200,30,40);
  box6 = new Box(360,200,30,40);
  
  ground = new Ground(600,680,200,20);

 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  slingshot.display();  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  ground.display();    
  drawSprites();
}

function mouseReleased(){
  Slingshot.fly();
}