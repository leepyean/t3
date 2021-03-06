const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var ground1;
var polygonimg,polygon;
var score = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  

  ground1=new Ground(400,395,800,10);
  stand1=new Ground(400,330,200,20);
  stand2=new Ground(650,250,200,20);


  block1=new Box2(325,305,40,40);
  block2=new Box2(375,305,40,40);
  block3=new Box2(425,305,40,40);
  block4=new Box2(475,305,40,40);
  block5=new Box3(350,255,40,40);
  block6=new Box3(400,255,40,40);
  block7=new Box3(450,255,40,40);
  block8=new Box4(375,205,40,40);
  block9=new Box4(425,205,40,40);
  block10=new Box(400,155,40,40);
  block11=new Box4(575,225,40,40);
  block12=new Box4(625,225,40,40);
  block13=new Box4(675,225,40,40);
  block14=new Box4(725,225,40,40);
  block15=new Box2(600,175,40,40);
  block16=new Box2(650,175,40,40);
  block17=new Box2(700,175,40,40);
  block18=new Box3(625,125,40,40);
  block19=new Box3(675,125,40,40);
  block20=new Box5(650,75,40,40);

  polygon=new Polygon(50,200,40);
  
  slingshot=new SlingShot(polygon.body,{x:150,y:200});

  Engine.run(engine);
}

function draw() {
  background("pink");
  noStroke()
    textSize(30)
    fill("white")
    text("Score : "+score,100,350)  
  drawSprites();
    
  ground1.display();
  stand1.display();
  stand2.display();
  strokeWeight(4)
  stroke(15)
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();

  polygon.display();
  slingshot.display();

  textSize(30)
  fill("purple")
  stroke("white")
  text("Press Space to get another chance",200,30)
  
  
}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
  
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}