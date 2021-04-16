
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  hammer1 = new Hammer(200,300);

	ground = new Ground(600,height,width*2,20);

	stone = new Stone(600,40,50,PI/5);

  Pebble1 = new Pebbles(580,300);
  Pebble2 = new Pebbles(540,300);
  Pebble3 = new Pebbles(500,300);
  Pebble4 = new Pebbles(460,300);
  Pebble5 = new Pebbles(420,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
 
  hammer1.display();
  ground.display();
  stone.display();
  Pebble1.display();
  Pebble2.display();
  Pebble3.display();
  Pebble4.display();
  Pebble5.display();

  drawSprites();
 
}



