
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball, ground
var world;
var box1;
function setup() {
	createCanvas(1200, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground= new Ground(400,600,1700,30)
ball= new Paper(200,200)
side1= new Ground(800,530,20,100)
side2= new Ground(1005,530,20,100)
side3= new Ground(900,580,205,20)
box1= new Box(1000,680,180, 100)
Engine.run(engine);
  
}


function draw() {
background("white")
rectMode(CENTER);
Engine.update(engine);
 ground.display()
 ball.display()
 side1.display()
 side2.display()
 side3.display()
 box1.display()
}
function keyPressed(){
	if(keyCode=UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85})
	}
}



