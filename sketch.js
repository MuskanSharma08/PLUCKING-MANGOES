
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, tree, boy, stone;
var mango1, sling;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, height, 1200, 50);
  tree = new Tree(900, 350);
  boy = new Boy(250, 530);
  stone = new Stone(230, 500, 10);

  mango1 = new Mango(900, 320, 10);
  mango2 = new Mango(800, 230, 10);
  mango3 = new Mango(1000, 170, 10);
  mango4 = new Mango(850, 300, 10);
  mango5 = new Mango(950, 300, 10);
  mango6 = new Mango(1050, 300, 10);
  mango7 = new Mango(740, 300, 10);
  mango8 = new Mango(1000, 270, 10);

  sling = new SlingShot(stone.body,{x:220, y:480});

	Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  background(146, 197, 247);
  Engine.update(engine);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  sling.display();
  drawSprites();
 }

 function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}

function detectCollision(stone, mango1){
  mangoBodyPosition = mango1.body.position
  stoneBodyPosition = stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango1.r+stone.r){
  Matter.body.setStatic(mango1.body,false);
}
}