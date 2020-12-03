
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

	paper1 = new  Paper(100,100,30);
	

	dustbin1 = new Dustbin(500,490,200,20);
	dustbin2 = new Dustbin(400,440,20,100);
	dustbin3 = new Dustbin(600,440,20,100);

   ground = new Ground(400,500,800,20);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  drawSprites();


paper1.display();

dustbin1.display();
dustbin2.display();
dustbin3.display();

ground.display();
 
}
function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-30});

}

}


