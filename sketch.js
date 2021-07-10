const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6;
var hero,monster,rope,ground;
var gameover_img, go_1;

function preload() {
  bg = loadImage("gamingbackground2.png");
  gameover_img = loadImage("gameover-removebg-preview.png")
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  //go_1= Bodies.rectangle(1500,350,20,20);
  //go_1.addImage(gameover_img);
  //go_1.visible=false;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(300,650,200);
  rope = new Rope(hero.body, { x: 400, y: 50 });
  monster = new Monster(1100,450,300);

  box1 = new Box(600, 100, 35, 35);
  box2 = new Box(900, 100, 45, 45);
  box3 = new Box(900, 100, 45, 45);
  box4 = new Box(900, 100, 45, 45);
  box5 = new Box(600, 100, 35, 35);
  box6 = new Box(600, 100, 35, 35);
  box7 = new Box(600, 100, 35, 35);
  box8 = new Box(900, 100, 45, 45);
  box9 = new Box(750, 100, 40, 40);
  box10 = new Box(750, 100, 40, 40);
  box11 = new Box(750, 100, 40, 40);
  box12 = new Box(750, 100, 40, 40);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  hero.display();
  rope.display();
  monster.display();

  //if(hero.isTouching(box1)|| hero.isTouching(box2)||hero.isTouching(box3)|| hero.isTouching(box4)||
  //hero.isTouching(box5)|| hero.isTouching(box6)|| hero.isTouching(box7)|| hero.isTouching(box8)
  //||hero.isTouching(box9)|| hero.isTouching(box10)|| hero.isTouching(box11)|| hero.isTouching(box12)
  //)//{
 //go_1.visible=true;
  //}

}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

