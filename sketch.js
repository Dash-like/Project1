const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var box, ball;     

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,780,800,20,options);
  World.add(world, ground);
  console.log(ground);


  box = Bodies.rectangle(100,100,50,50,options);
  World.add(world, box);
  var options_ball = {
    // isStatic: false
    restitution: 1.0
  }

  ball = Bodies.circle(200,200,50,options_ball);
  World.add(world, ball);
  
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);      
  
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);    
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);                       
 }

 