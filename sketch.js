const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var melon;
var bg;
var rabbit;
var bunny;
var fruit;
var button;

function preload(){
bg = loadImage("background.png");
melon = loadImage("melon.png");
rabbit = loadImage("Rabbit-01.png");

}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  bunny=createSprite(250,650,100,100)
  bunny.addImage(rabbit)
  bunny.scale=0.2
  button=createImg("melon.png");
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  imageMode (CENTER);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg,width/2,height/2,500,700)
  rope.show();
  image(melon,fruit.position.x,fruit.position.y,70,70);
  Engine.update(engine);
  ground.show();
drawSprites()
 
   
}
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null;
}