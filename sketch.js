var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageSprite, packageSprite2, packageSprite3,
var packageBody,packageBody2,packageBody3,ground
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lwall, rwall, bwall;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	/*rect1=createSprite(250,650,10,50,{restitution:0.55, isStatic:true});
	rect1.shapeColor="blue"
	rect2=createSprite(400,650,100,10, {restitution:0.55,isStatic:true});
	rect2.shapeColor="green"
	World.add(world,rect1,rect2);*/


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite2=createSprite(480,80,10,10);
	packageSprite2.addImage(packageIMG);
	packageSprite2.scale=0.2

	packageSprite3=createSprite(350,80,10,10);
	packageSprite3.addImage(packageIMG);
	packageSprite3.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	 rect1=createSprite(width/2,50,200,20);
	 rect1.shapeColor=color("red");
	 rect2=createSprite(510,610,20,100);
	 rect2.shapeColor=color("red");
	 rect3=createSprite(310,610,20,100);
	 rect3.shapeColor=color("red");

	Engine.run(engine);

	packageBody=Bodies.circle(width/2,200,10, {isStatic=true});
  World.add(world,packageBody);

    packageBody2=Bodies.circle(width/2,200,10,{isStatic=true});
	World.add(world,packageBody2);

	packageBody3=Bodies.circle(width/2,200,15, {isStatic=true});
	World.add(world.packageBody3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite2.x= packageBody2.position.x 
  packageSprite2.y= packageBody2.position.y 
  packageSprite3.x= packageBody3.position.x 
  packageSprite3.y= packageBody3.position.y 
  packageSprite.collide(rect1);
  packageSprite2.collide(rect1);
  packageSprite3.collide(rect1);

  packageSprite.collide(rect2);
  packageSprite2.collide(rect2);
  packageSprite3.collide(rect2);

  packageSprite.collide(rect3);
  packageSprite2.collide(rect3);
  packageSprite3.collide(rect3);

  rect1.display();
  rect2.display();
  rect3.display();

  packageSprite.display();
  packageSprite2.display();
  packageSprite3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Matter.Body.setStatic(packageBody,false);
 }

	 if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		 Matter.Body.setStatic(packageBody2,false);
	 }


		 if (keyCode === DOWN_ARROW) {
			// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
			 Matter.Body.setStatic(packageBody3,false);
			}
}
