
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paperball,dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paperball=new Paper(100,250);
  
    dustbin=new Box(340,320);

    ground=new Ground(400,380,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  paperball.display();
  dustbin.display();
  ground.display();

  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-115});

  }
}
