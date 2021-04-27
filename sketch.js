// creating the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	// creating the ball of the game
	DemolitionBall = new Ball(width/2 - 400, 500);

	// creating the point
	Point = new point(width/2 - 400, 300);

	// creating the sling 
	sling = new Slingshot(DemolitionBall.body, Point.body);

	// creating the platform
	plfrm1 = new ground(width/2 + 200, 500);

	// creating the obs
	obs1 = new obs(width/2, 400, 50, 50);
	obs2 = new obs(width/2 + 50, 300, 50, 50);
	obs3 = new obs(width/2 + 100, 400, 50, 50);
	obs4 = new obs(width/2 + 150, 400, 50, 50);
	obs5 = new obs(width/2 + 200, 400, 50, 50);
	obs6 = new obs(width/2 + 250, 400, 50, 50);
	obs7 = new obs(width/2 + 300, 400, 50, 50);
	obs8 = new obs(width/2 + 350, 400, 50, 50);
	obs9 = new obs(width/2 + 400, 400, 50, 50);

	obs10 = new obs(width/2, 350, 50, 50);
	obs11 = new obs(width/2 + 50, 250, 50, 50);
	obs12 = new obs(width/2 + 100, 350, 50, 50);
	obs13 = new obs(width/2 + 150, 350, 50, 50);
	obs14 = new obs(width/2 + 200, 350, 50, 50);
	obs15 = new obs(width/2 + 250, 350, 50, 50);
	obs16 = new obs(width/2 + 300, 350, 50, 50);
	obs17 = new obs(width/2 + 350, 350, 50, 50);
	obs18 = new obs(width/2 + 400, 350, 50, 50);

	obs19 = new obs(width/2, 300, 50, 50);
	obs20 = new obs(width/2 + 50, 200, 50, 50);
	obs21 = new obs(width/2 + 100, 300, 50, 50);
	obs22 = new obs(width/2 + 150, 300, 50, 50);
	obs23 = new obs(width/2 + 200, 300, 50, 50);
	obs24 = new obs(width/2 + 250, 300, 50, 50);
	obs25 = new obs(width/2 + 300, 300, 50, 50);
	obs26 = new obs(width/2 + 350, 300, 50, 50);
	obs27 = new obs(width/2 + 400, 300, 50, 50);

	obs28 = new obs(width/2, 250, 50, 50);
	obs29 = new obs(width/2 + 50, 150, 50, 50);
	obs30 = new obs(width/2 + 100, 250, 50, 50);
	obs31 = new obs(width/2 + 150, 250, 50, 50);
	obs32 = new obs(width/2 + 200, 250, 50, 50);
	obs33 = new obs(width/2 + 250, 250, 50, 50);
	obs34 = new obs(width/2 + 300, 250, 50, 50);
	obs35 = new obs(width/2 + 350, 250, 50, 50);
	obs36 = new obs(width/2 + 400, 250, 50, 50);



	//creating a ground
	ground1  = new plfrm(width/2, 670);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('#206a5d');

  sling.display();

  DemolitionBall.display();

  Point.display();

  plfrm1.display();

  textSize(30);
  fill('yellow');
  textFont('Ayuthaya')
  text('Building Demolition', width/2 - 200, 50);

  obs1.display();
  obs2.display();
  obs3.display();
  obs4.display();
  obs5.display();
  obs6.display();
  obs7.display();
  obs8.display();
  obs9.display();

  obs10.display();
  obs11.display();
  obs12.display();
  obs13.display();
  obs14.display();
  obs15.display();
  obs16.display();
  obs17.display();
  obs18.display();

  obs19.display();
  obs20.display();
  obs21.display();
  obs22.display();
  obs23.display();
  obs24.display();
  obs25.display();
  obs26.display();
  obs27.display();

  obs28.display();
  obs29.display();
  obs30.display();
  obs31.display();
  obs32.display();
  obs33.display();
  obs34.display();
  obs35.display();
  obs36.display();

  ground1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == 32){
		sling.attach(DemolitionBall.body);
	}
}

function mouseDragged(){
	Body.setPosition(DemolitionBall.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	sling.fly();
}



