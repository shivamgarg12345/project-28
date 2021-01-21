
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeImage;
var boyImage;

function preload()
{
  treeImage = loadImage("sprites/tree.png");
  boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	gr = new Ground();

  stone = new Stone();
  cnstrnt = new ConstraintClass(stone.body, {x:120, y:560});
  
  //mangoes
  mango1 = new Mangoes(490, 270, 40);
  mango2 = new Mangoes(580, 230, 40);
  mango3 = new Mangoes(620, 300, 40);
  mango4 = new Mangoes(470, 400, 40);
  mango5 = new Mangoes(380, 350, 40);
  mango6 = new Mangoes(640, 360, 40);
  mango7 = new Mangoes(700, 310, 40);
  mango8 = new Mangoes(750, 400, 40);
  mango9 = new Mangoes(550, 350, 40);
  mango10 = new Mangoes(450, 330, 40);

  //boy
  boy = createSprite(170, 600, 50, 100);
  boy.addImage("boy image", boyImage);
  boy.scale = 0.1;

  //tree
  tree = createSprite(565, 450, 50, 100);
  tree.addImage("tree image", treeImage);
  tree.scale = 0.4;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  gr.display();
  stone.display();
  cnstrnt.display();
  
  //mango display
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  drop(stone, mango1);
  drop(stone, mango2);
  drop(stone, mango3);
  drop(stone, mango4);
  drop(stone, mango5);
  drop(stone, mango6);
  drop(stone, mango7);
  drop(stone, mango8);
  drop(stone, mango9);
  drop(stone, mango10);



}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  cnstrnt.fly();
}

function drop(bodya, bodyb) {
  stpos = bodya.body.position;
  manpos = bodyb.body.position;
  var distance = dist(stpos.x, stpos.y, manpos.x, manpos.y);
  if(distance<=50) {
      Matter.Body.setStatic(bodyb.body, false);
  }
}

function keyPressed() {
  if(keyCode === 32) {
    cnstrnt.goback();
  }
}